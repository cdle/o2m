package controllers

import (
	"github.com/cdle/o2m/models"
)

//UserController 用户控制器
type UserController struct {
	BaseController
}

//NextPrepare next prepare
func (c *UserController) NextPrepare() {
	c.Logined().Allow(models.UserRoleServer)
}

//UserUpdateRequest 更新用户信息请求
type UserUpdateRequest struct {
	Name  string `json:"name" validate:"omitempty"`
	Email string `json:"email" validate:"omitempty,email"`
}

// UserUpdate 更新用户信息
// @Title 更新用户信息
// @Description 更新用户信息
// @Param uid path int false "用户ID,默认为自己的"
// @Param body body controllers.UserUpdateRequest "更新用户信息"
// @Success code.OK
// @router /?:uid([1-9][0-9]*) [put]
func (c *UserController) UserUpdate() {
	uid := c.GetPathInt32("uid")
	if uid == 0 {
		uid = c.UID
	}
	ps := &UserUpdateRequest{}
	c.Validate(ps)
	u, err := models.UpdateUser(&models.User{
		ID:    uid,
		Name:  ps.Name,
		Email: ps.Email,
	})
	c.ResponseError(err).Response(u)
}

// UserList 用户列表
// @Title 用户列表
// @Description 用户列表
// @Success code.OK
// @router /list [get]
func (c *UserController) UserList() {
	c.Response(models.GetClients(c.UID))
}

// @Title 用户信息
// @Description 用户信息
// @Param uid path int false "用户ID,默认为自己的"
// @Success code.OK
// @router /?:uid [get]
func (c *UserController) UserInfo() {
	uid := c.GetPathInt32("uid")
	if uid == 0 {
		uid = c.UID
	}
	u, err := models.FetchUser(
		uid,
	)
	c.ResponseError(
		err,
	).Response(u)
}
