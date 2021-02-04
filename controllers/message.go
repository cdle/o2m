package controllers

import (
	"fmt"
	"time"

	"github.com/cdle/o2m/models"
)

//MessageController 鉴权控制器
type MessageController struct {
	BaseController
}

//SendMessageRequest 发送消息请求
type SendMessageRequest struct {
	ID   int64  `json:"id" `
	Rid  int32  `json:"rid"`
	Data string `json:"data" validate:"required,lt=50000"`
	Mark string `json:"mark" validate:"omitempty,lt=32"`
	Type int32  `json:"type" validate:"omitempty,oneof=0 1 2"`
}

// @Title 发送消息
// @Description 发送消息
// @Param body body controllers.SendMessageRequest "消息主体"
// @Success code.OK
// @router / [post]
func (c *MessageController) SendMessage() {
	c.Logined()
	ps := &SendMessageRequest{}
	c.Validate(ps)
	c.ResponseError(c.User().HandleMessage(&models.Message{
		ID:   ps.ID,
		Rid:  ps.Rid,
		Data: ps.Data,
		Type: ps.Type,
		Mark: ps.Mark,
	}))
}

// @Title 消息记录
// @Description 消息记录
// @Param id query string false "目标ID，默认获取自身"
// @Success code.OK
// @router /record [get]
func (c *MessageController) GetClientHistoryMessage() {
	c.Logined()
	c.Ctx.Output.Header("uid", fmt.Sprint(c.UID))
	if c.UTP >= 3 {
		c.Response(models.GetClientHistoryMessage(c.UID))
	} else {
		c.Response(models.GetClientHistoryMessage(c.GetQueryInt32("id")))
	}
}

// @Title 接收消息
// @Description 使用ajax轮询接收消息
// @Param domain query string false "域"
// @Param email  query string false "邮箱"
// @Param name   query string false "姓名"
// @Param role   query string false "角色"
// @Param mall   query string false "商城"
// @Param random query string false "固定随机字符串，用以标识当前会话的唯一性"
// @Success code.OK
// @router /polling [get]
func (c *MessageController) ReceiveMessage() {
	c.getAuth()
	ap := &models.AjaxPolling{}
	u := c.User()
	///客户上线推送
	// fmt.Println("/////", u.GetRole(), u.Online(), "init")
	if u.GetRole() >= 3 && !u.Online() {
		// fmt.Println("-----")
		if sid := u.GetServerID(); sid != 0 {
			s, _ := models.FetchUser(sid)
			s.Push(&models.Message{
				Fid:  u.GetID(),
				Type: 3,
				Data: "online",
			})
		}
	}
	///
	ap = ap.Init(u, c.GetString("random"))
	if ap.GetTimes() == 1 {
		c.Response()
	}
	ap.Note()
	idleMessage := ap.GetIdleMessage()
	if idleMessage != nil {
		c.Response(idleMessage)
	}
	i := models.WaittingTime
	for {
		select {
		case m := <-ap.GetMessageChan():
			ap.Note()
			c.Response([]*models.Message{m})
		case <-time.After(time.Second):
			ap.Note()
			if i == 0 {
				c.Response()
			} else {
				i--
				break
			}
		}
	}

}

func (c *MessageController) getAuth() {
	if v := c.GetSession("utp"); v != nil {
		c.UID = c.GetSession("uid").(int32)
		c.UTP = v.(int32)
		if c.GetString("role") != "" {
			c.Allow(models.UserRoleServer)
		}
		c.Ctx.Output.Header("uid", fmt.Sprint(c.UID))
		return
	} else if c.GetString("role") != "" {
		c.Allow(models.UserRoleServer)
		return
	}
	u := &models.User{
		Domain: c.GetString("domain"),
		IP:     c.Ctx.Request.RemoteAddr,
		Email:  c.GetString("email"),
		Name:   c.GetString("name"),
		Mall:   c.GetString("mall"),
	}
	c.ResponseError(models.CreateUser(u, nil))
	c.SetSession("uid", u.ID)
	c.SetSession("utp", u.Role)
	c.Ctx.Output.Header("uid", fmt.Sprint(u.ID))
	c.Response()
}
