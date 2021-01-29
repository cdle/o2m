package controllers

import (
	"encoding/json"
	"strconv"

	"github.com/astaxie/beego"
	"github.com/cdle/o2m/models"
	"github.com/go-playground/locales/zh"
	ut "github.com/go-playground/universal-translator"
	"gopkg.in/go-playground/validator.v9"
	zh_translations "gopkg.in/go-playground/validator.v9/translations/zh"
)

var validate *validator.Validate
var trans ut.Translator

func init() {
	beego.BConfig.WebConfig.AutoRender = false
	beego.BConfig.WebConfig.Session.SessionOn = true
	beego.BConfig.WebConfig.DirectoryIndex = true
	beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	beego.BConfig.WebConfig.Session.SessionProvider = "file"
	beego.BConfig.WebConfig.Session.SessionProviderConfig = "./session"
	beego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 360000

	//验证器注册翻译器
	var zhCh = zh.New()
	validate = validator.New()
	var uni = ut.New(zhCh)
	trans, _ = uni.GetTranslator("zh")
	zh_translations.RegisterDefaultTranslations(validate, trans)
}

const (
	//CommonError 普通
	CommonError = 1
	//DuplicateError 重复
	DuplicateError = 2
	//NotLoginError 未登录
	NotLoginError = 3
	//NotLogoutError 未登出
	NotLogoutError = 4
	//NotFindError 找不到
	NotFindError = 5
	//NoAccessError 无权限
	NoAccessError = 6
)

//BaseController 基础控制器
type BaseController struct {
	beego.Controller
	//用户id
	UID int32
	//用户类型
	UTP int32
}

//NextPrepare 下一个准备
type NextPrepare interface {
	NextPrepare()
}

//Prepare 准备
func (c *BaseController) Prepare() {
	if app, ok := c.AppController.(NextPrepare); ok {
		app.NextPrepare()
	}
}

//Response 响应
func (c *BaseController) Response(ps ...interface{}) {
	rsp := struct {
		//状态码
		Code int `json:"code"`
		//数据
		Data interface{} `json:"data"`
		//描述信息
		Msg string `json:"msg"`
	}{}
	switch len(ps) {
	case 3:
		rsp.Code = ps[2].(int)
		fallthrough
	case 2:
		switch ps[1].(type) {
		case string:
			rsp.Msg = ps[1].(string)
		case error:
			rsp.Msg = ps[1].(error).Error()
		}
		fallthrough
	case 1:
		rsp.Data = ps[0]
	}
	c.Data["json"] = rsp
	c.ServeJSON()
	c.StopRun()
}

//ResponseError 响应错误
func (c *BaseController) ResponseError(ps ...interface{}) *BaseController {
	switch len(ps) {
	case 2:
		c.Response(nil, ps[0], ps[1])
	case 1:
		if ps[0] == nil {
			return c
		}
		c.Response(nil, ps[0], CommonError)
	case 0:
		c.Response(nil, "fail", CommonError)
	}
	return nil
}

//Logined 登录
func (c *BaseController) Logined() *BaseController {
	if v := c.GetSession("uid"); v == nil {
		c.ResponseError("未登录", NotLoginError)
	} else {
		c.UID = v.(int32)
		c.UTP = c.GetSession("utp").(int32)
	}
	return c
}

//Logouted 登出
func (c *BaseController) Logouted() *BaseController {
	if v := c.GetSession("uid"); v != nil {
		c.ResponseError("未退出登录", NotLogoutError)
	}
	return c
}

//Validate 表单验证
func (c *BaseController) Validate(ps interface{}) *BaseController {
	err := json.Unmarshal(c.Ctx.Input.RequestBody, ps)
	c.ResponseError(err)
	err = validate.Struct(ps)
	if err != nil {
		for _, err := range err.(validator.ValidationErrors) {
			c.ResponseError(err.Translate(trans))
		}
	}
	return c
}

//GetPathInt64 get path int64
func (c *BaseController) GetPathInt64(v string) int64 {
	r := c.Ctx.Input.Param(":" + v)
	if r == "" {
		return 0
	}
	i, err := strconv.Atoi(r)
	c.ResponseError(err)
	return int64(i)
}

//GetPathInt get path int
func (c *BaseController) GetPathInt(v string) int {
	r := c.Ctx.Input.Param(":" + v)
	if r == "" {
		return 0
	}
	i, err := strconv.Atoi(r)
	c.ResponseError(err)
	return i
}

//GetPathInt32 get path int32
func (c *BaseController) GetPathInt32(v string) int32 {
	r := c.Ctx.Input.Param(":" + v)
	if r == "" {
		return 0
	}
	i, err := strconv.Atoi(r)
	c.ResponseError(err)
	return int32(i)
}

//Finish 结束补充
func (c *BaseController) Finish() {
	c.Response()
}

//User 返回用户结构体
func (c *BaseController) User() *models.User {
	u, err := models.FetchUser(c.UID)
	c.ResponseError(err)
	return u
}

//GetQueryInt32
func (c *BaseController) GetQueryInt32(v string) int32 {
	r := c.GetString(v)
	if r == "" {
		return 0
	}
	i, err := strconv.Atoi(r)
	c.ResponseError(err)
	return int32(i)
}

//Allow 权限控制
func (c *BaseController) Allow(tps ...int32) *BaseController {
	if c.UTP == models.UserRoleAdmin {
		return nil
	}
	for _, tp := range tps {
		if c.UTP == tp {
			return c
		}
	}
	c.ResponseError("无权限", NoAccessError)
	return nil
}
