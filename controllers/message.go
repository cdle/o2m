package controllers

import (
	"fmt"
	"time"

	"github.com/cdle/o2m/models"
)

//MessageController 消息控制器
type MessageController struct {
	BaseController
}

//SendMessageRequest 发送消息请求
type SendMessageRequest struct {
	ID   int64  `json:"id" `
	Rid  int32  `json:"rid"`
	Data string `json:"data" validate:"omitempty,lt=10000"`
	Mark string `json:"mark" validate:"omitempty,lt=32"`
	Type int32  `json:"type" validate:"omitempty,oneof=0 1 2 3 4 5 6"`
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
		c.Response()
		// c.Response(models.GetClientHistoryMessage(c.UID))
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
	conn := &models.AjaxPolling{}
	u := c.User()
	if u.GetRole() >= 3 && !u.Online() {
		if sid := u.GetServerID(); sid != 0 {
			s, _ := models.FetchUser(sid)
			s.Push(&models.Message{
				Fid:  u.GetID(),
				Type: 3,
				Data: "online",
			})
		}
	}
	conn = conn.Init(u, c.GetString("random"))
	c.Ctx.Output.Header("Request-Times", fmt.Sprint(conn.GetTimes()))
	if conn.GetTimes() == 1 && u.GetRole() >= 3 {
		his := models.GetClientHistoryMessage(c.UID)
		if len(*his) == 0 {
			hello := models.Message{
				Time: time.Now().UnixNano(),
				Rid:  u.GetID(),
				Data: `<span>Hello! How can I help you?&nbsp;</span><span data-size="small" data-name="small-smile" style="white-space: normal;/* background-color: rgb(25, 114, 245); */color: rgb(255, 255, 255);font-family: &quot;Crisp Noto Sans Regular&quot;, sans-serif;max-width: none !important;word-break: normal !important;font-size: 11px !important;box-sizing: content-box !important;background-attachment: scroll !important;background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIzMiIgZmlsbD0iI0ZGREQ2NyIvPjxnIGZpbGw9IiM2NjRFMjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjkgMjAuMykiPjxjaXJjbGUgY3g9IjUuOSIgY3k9IjYiIHI9IjUuMyIvPjxjaXJjbGUgY3g9IjMwLjQiIGN5PSI2IiByPSI1LjMiLz48cGF0aCBkPSJNMzEuNiAyMC42Yy04LjcgNi0xOC4zIDYtMjcgMC0xLS44LTEuOC41LTEuMiAxLjdhMTcuNSAxNy41IDAgMDAxNC43IDguMmM2LjkgMCAxMi0zLjggMTQuOC04LjIuNi0xLjItLjMtMi41LTEuMy0xLjciLz48L2c+PC9nPjwvc3ZnPg==&quot;) !important;background-position: center center !important;background-repeat: no-repeat !important;border: medium none currentcolor !important;inset: auto !important;clear: none !important;clip: auto !important;counter-increment: none !important;counter-reset: none !important;cursor: auto !important;direction: inherit !important;display: inline-block !important;float: none !important;font-variant-numeric: normal !important;font-variant-east-asian: normal !important;height: 16px !important;line-height: inherit !important;list-style-type: inherit !important;list-style-position: outside !important;list-style-image: none !important;max-height: none !important;min-height: 0px !important;min-width: 0px !important;outline: 0px !important;padding: 0px !important;position: static !important;quotes: &quot;&quot; &quot;&quot; !important;table-layout: auto !important;text-decoration-line: inherit !important;text-rendering: auto !important;unicode-bidi: normal !important;vertical-align: middle !important;visibility: inherit !important;width: 16px !important;z-index: auto !important;background-origin: padding-box !important;background-clip: border-box !important;background-size: contain !important;border-radius: 0px !important;box-shadow: none !important;columns: auto auto !important;column-gap: normal !important;column-rule: medium none rgb(0, 0, 0) !important;-webkit-text-fill-color: currentcolor !important;-webkit-tap-highlight-color: transparent !important;font-feature-settings: normal !important;overflow: visible !important;hyphens: manual !important;-webkit-hyphenate-character: &quot;‐&quot; !important;perspective: none !important;perspective-origin: 50% 50% !important;backface-visibility: visible !important;text-shadow: none !important;transition: all 0s ease 0s !important;-webkit-font-smoothing: subpixel-antialiased !important;user-select: text !important;"></span>`,
			}
			models.StoreMessage(&hello)
			c.Response([]models.Message{hello})

		} else {
			c.Response(his)
		}
	}
	conn.Note()
	idleMessage := conn.GetIdleMessage()
	if idleMessage != nil {
		c.Response(idleMessage)
	}
	i := models.WaittingTime
	for {
		select {
		case m := <-conn.GetMessageChan():
			conn.Note()
			c.Response([]*models.Message{m})
		case <-time.After(time.Second):
			conn.Note()
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
	c.UID = u.ID
	c.UTP = u.Role
}
