package controllers

import (
	"github.com/cdle/o2m/models"
)

//AuthController 鉴权控制器
type AuthController struct {
	BaseController
}

//RegisterRequest 注册请求
type RegisterRequest struct {
	Name            string `json:"name" validate:"required"`
	Email           string `json:"email" validate:"required"`
	Password        string `json:"password" validate:"required"`
	ConfirmPassword string `json:"confirm_password" validate:"required,eqfield=Password"`
	// Role            int    `json:"role" validate:"required"`
}

// @Title 客服注册
// @Description 客服注册
// @Param body body controllers.RegisterRequest "客服注册"
// @Success code.OK
// @router /register [post]
func (c *AuthController) Register() {
	ps := &RegisterRequest{}
	c.Logouted().Validate(ps)
	err := models.CreateUser(&models.User{
		Name:  ps.Name,
		Email: ps.Email,
		Role:  2,
	}, &models.Auth{
		ID:  ps.Email,
		Key: ps.Password,
	})
	c.ResponseError(err)
}

//ChangePasswordRequest 修改密码
type ChangePasswordRequest struct {
	Email    string `json:"email" validate:"omitempty,email"`
	Password string `json:"password" validate:"required"`
	// ConfirmPassword string `json:"confirm_password" validate:"required,eqfield=Password"`
}

// ChangePassword 修改密码
// @Title 修改密码
// @Description 修改密码
// @Param body body	controllers.ChangePasswordRequest "修改密码"
// @Success code.OK
// @router /password [put]
func (c *AuthController) ChangePassword() {
	ps := &ChangePasswordRequest{}
	c.Logined().Validate(ps)
	_, err := models.UpdateAuth(&models.Auth{
		ID:  ps.Email,
		Key: ps.Password,
	})
	c.ResponseError(err)
}

//LoginRequest 登录请求
type LoginRequest struct {
	ID  string `json:"id" validate:"required"`
	Key string `json:"key" validate:"required"`
}

// @Title 用户登录
// @Description 用户登录
// @Param	body	body	controllers.LoginRequest "用户登录"
// @Success code.OK
// @router /login [post]
func (c *AuthController) Login() {
	ps := &LoginRequest{}
	c.Validate(ps)
	a, err := models.FetchAuth(ps.ID)
	c.ResponseError(err)
	if a.GetKey() == ps.Key {
		u, err := models.FetchUser(a.UID)
		c.ResponseError(err)
		c.SetSession("uid", u.ID)
		c.SetSession("utp", u.Role)
		c.Response()
	}
	c.ResponseError("密码错误")
}

// @Title 用户登录
// @Description 用户登录
// @Success code.OK
// @router /logout [post]
func (c *AuthController) Logout() {
	c.DestroySession()
}
