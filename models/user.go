//Package models 用户基本信息
package models

import (
	"sync"
	"time"
)

var users sync.Map

// User 记录用户的基础信息
type User struct {
	//用户ID
	ID int32 `json:"id"`
	//角色 1 管理员 2 客服 3 用户 4 游客
	Role int32 `json:"role"`
	//域名地址
	IP string `json:"ip"`
	//姓名
	Name string `json:"name"`
	//邮箱
	Email string `json:"email" gorm:"type:varchar(100);default:null;unique_index"`
	//性别 1 男 2 女
	Sex int32 `json:"sex"`
	//记录活跃时间
	NoteAt int64 `json:"note_at"`
	//域
	Domain string `json:"domain"`
	//消息连接
	Connections []Connection `json:"-" gorm:"-"`
	//客服ID
	ServerID int32 `json:"-"`
	//读写锁
	*sync.RWMutex
}

const (
	UserRoleAdmin   = 1
	UserRoleServer  = 2
	UserRoleClient  = 3
	UserRoleTourist = 4
)

// CreateUser 创建用户
func CreateUser(u *User, a *Auth) error {
	if u.Role == 0 {
		u.Role = 4
	}
	if u.Sex == 0 {
		u.Sex = 1
	}
	u.NoteAt = time.Now().UnixNano()
	tx := db.Begin()
	err := tx.Create(u).Error
	if err != nil {
		tx.Rollback()
		return err
	}
	if a != nil {
		a.UID = u.ID
		err = tx.Create(a).Error
		if err != nil {
			tx.Rollback()
			return err
		}
	}
	err = tx.Commit().Error
	if err != nil {
		return err
	}
	u.Init()
	users.Store(u.ID, u)
	if a != nil {
		a.Init()
		auths.Store(a.ID, a)
	}
	return nil
}

// UpdateUser 更新用户
func UpdateUser(n *User) (*User, error) {
	if n.ID == 0 {
		return nil, ErrorWrong
	}
	u, err := FetchUser(n.ID)
	if err != nil {
		return nil, err
	}
	u.Lock()
	defer u.Unlock()
	tx := db.Begin()
	if tx.Model(n).Where("id = ?", n.ID).Updates(*n).RowsAffected != 0 {
		if n.Email != "" {
			if tx.Table("auths").Where("id = ?", u.Email).Update("id", n.Email).RowsAffected == 0 {
				tx.Rollback()
				return nil, ErrorUpdate
			}
		}
		err := tx.Commit().Error
		if err != nil {
			return u, ErrorUpdate
		}
		///
		if n.Role != 0 {
			u.Role = n.Role
		}
		if n.Name != "" {
			u.Name = n.Name
		}
		if n.Email != "" {
			u.Email = n.Email
		}
		///
		return u, err
	}
	tx.Rollback()
	return u, ErrorUpdate
}

// DeleteUser 删除用户
func DeleteUser(id int32) error {
	if id == 0 {
		return ErrorWrong
	}
	users.Delete(id)
	return nil
}

// FetchUser 获取用户
func FetchUser(id int32) (*User, error) {
	if id == 0 {
		return nil, ErrorWrong
	}
	u, b := users.Load(id)
	if b {
		return u.(*User), nil
	}
	return nil, ErrorNotFind
}

// FetchUsers 获取所有用户
func FetchUsers() []*User {
	us := []*User{}
	users.Range(func(_, v interface{}) bool {
		u := v.(*User)
		u.RLock()
		n := *u
		u.RUnlock()
		us = append(us, &n)
		return true
	})
	return us
}

// GetClients 获取客户
func GetClients(sid int32) []User {
	us := []User{}
	db.Where("server_id = ?", sid).Order("id desc").Find(&us)
	for k, _ := range us {
		if u, ok := users.Load(us[k].ID); ok {
			us[k].NoteAt = u.(*User).GetNoteTime()
		}
	}
	return us
}

//GetID get ID
func (u *User) GetID() int32 {
	u.RLock()
	u.RUnlock()
	return u.ID
}

//GetRole get role
func (u *User) GetRole() int32 {
	u.RLock()
	u.RUnlock()
	return u.Role
}

//Init init
func (u *User) Init() {
	u.RWMutex = new(sync.RWMutex)
	u.Connections = []Connection{}
}

//SetID set id
func (u *User) SetID(id int32) *User {
	up, ok := users.Load(id)
	if ok {
		u = up.(*User)
		return u
	}
	return nil
}

//GetName get name
func (u *User) GetName() string {
	u.RLock()
	u.RUnlock()
	return u.Name
}

//Push 推送消息
func (u *User) Push(m *Message) {
	u.RLock()
	defer u.RUnlock()
	for _, connect := range u.Connections {
		connect.Push(m)
	}
}

var ServerIDS []int32
var ServerIDSLocker sync.RWMutex

func init() {
	go func() {
		for {
			<-time.After(time.Second * 2)
			ServerIDSLocker.RLock()
			for _, ServerID := range ServerIDS {
				u, err := FetchUser(ServerID)
				if err != nil || !u.Online() {
					go RemServerID(ServerID)
					break
				}
			}
			ServerIDSLocker.RUnlock()
		}
	}()
}

func AddServerID(id int32) {
	ServerIDSLocker.Lock()
	defer ServerIDSLocker.Unlock()
	for _, ServerID := range ServerIDS {
		if ServerID == id {
			return
		}
	}
	ServerIDS = append(ServerIDS, id)
}

func RemServerID(id int32) {
	ServerIDSLocker.Lock()
	defer ServerIDSLocker.Unlock()
	for k, ServerID := range ServerIDS {
		if ServerID == id {
			ServerIDS = append(ServerIDS[:k], ServerIDS[k+1:]...)
			return
		}
	}
}

func GetServerID(id int32, sid int32) int32 {
	ServerIDSLocker.RLock()
	defer ServerIDSLocker.RUnlock()
	len := int32(len(ServerIDS))
	if len == 0 {
		return 0
	}
	if sid != 0 {
		for _, ServerID := range ServerIDS {
			if ServerID == sid {
				return sid
			}
		}
	}
	sid = ServerIDS[id%len]
	go db.Table("users").Where("id = ?", id).Update("server_id", sid)
	return sid
}

// GetServerID 获取客服ID
func (u *User) GetServerID(id int32) int32 {
	if u.Role <= 2 {
		return id
	}
	u.RLock()
	sid := GetServerID(u.GetID(), u.ServerID)
	u.RUnlock()
	if sid != u.ServerID {
		u.Lock()
		u.ServerID = sid
		u.Unlock()
	}
	return sid
}

//Note
func (u *User) Note() {
	u.Lock()
	defer u.Unlock()
	tm := time.Now().UnixNano()
	if u.NoteAt == 0 {
		go db.Table("users").Where("id = ?", u.ID).Update("note_at", tm)
	}
	u.NoteAt = tm
	if u.Role <= 2 {
		AddServerID(u.ID)
	}
}

//GetLiveTime 获取活跃时间
func (u *User) GetNoteTime() int64 {
	u.RLock()
	defer u.RUnlock()
	return u.NoteAt
}

//GetLiveTime 获取活跃时间
func (u *User) Online() bool {
	u.RLock()
	defer u.RUnlock()
	if u.NoteAt == 0 {
		return false
	}
	return (time.Now().UnixNano()-u.NoteAt)/1e9 < 1
}
