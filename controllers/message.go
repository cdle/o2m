package controllers

import (
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
	Data string `json:"data" validate:"required,lt=500"`
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
// @Param random query string false "固定随机字符串，用以标识当前会话的唯一性"
// @Success code.OK
// @router /polling [get]
func (c *MessageController) ReceiveMessage() {
	c.getAuth()
	ap := &models.AjaxPolling{}
	u := c.User()
	u.Note()
	ap = ap.Init(u, c.GetString("random"))
	idleMessage := ap.GetIdleMessage()
	if idleMessage != nil {
		c.Response(idleMessage)
	}
	i := models.WaittingTime
	for {
		select {
		case m := <-ap.GetMessageChan():
			u.Note()
			c.Response([]*models.Message{m})
		case <-time.After(time.Second):
			u.Note()
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
	if c.GetString("role") != "" {
		c.Logined()
		return
	}
	if v := c.GetSession("uid"); v != nil {
		c.UID = v.(int32)
		c.UTP = c.GetSession("utp").(int32)
		return
	}
	u := &models.User{
		Domain: c.GetString("domain"),
		IP:     c.Ctx.Request.RemoteAddr,
		Email:  c.GetString("email"),
		Name:   c.GetString("name"),
	}
	c.ResponseError(models.CreateUser(u, nil))
	c.SetSession("uid", u.ID)
	c.SetSession("utp", u.Role)
	c.Response()
}
