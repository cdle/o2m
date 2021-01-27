//Package models 用户的鉴权
package models

import (
	"sync"
)

var auths sync.Map

//Auth 用户鉴权表
type Auth struct {
	//主键 可以是phone、email...
	ID string `gorm:"primary_key"`
	//密钥 加密后的32位密钥
	Key string
	//用户ID
	UID int32
	//读写锁
	*sync.RWMutex
}

//Init init
func (a *Auth) Init() {
	a.RWMutex = new(sync.RWMutex)
}

//GetKey get key
func (a *Auth) GetKey() string {
	a.RLock()
	defer a.RUnlock()
	return a.Key
}

//GetID get id
func (a *Auth) GetID() string {
	a.RLock()
	defer a.RUnlock()
	return a.ID
}

//CreateAuth 创建鉴权
func CreateAuth(a *Auth) (*Auth, error) {
	err := db.Create(a).Error
	if err != nil {
		return nil, err
	}
	auths.Store(a.ID, a)
	return a, nil
}

// UpdateAuth 更新鉴权
func UpdateAuth(n *Auth) (*Auth, error) {
	var err error
	if n.ID == "" {
		return nil, ErrorWrong
	}
	u, err := FetchAuth(n.ID)
	if err != nil {
		return nil, err
	}
	u.Lock()
	defer u.Unlock()
	if db.Model(n).Where("id = ?", n.ID).Updates(*n).RowsAffected != 0 {
		if n.Key != "" {
			u.Key = n.Key
		}
		return u, nil
	}
	return u, ErrorUpdate
}

// DeleteAuth 删除鉴权
func DeleteAuth(id string) error {
	if id == "" {
		return ErrorWrong
	}
	auths.Delete(id)
	return nil
}

// FetchAuth 获取鉴权
func FetchAuth(id string) (*Auth, error) {
	if id == "" {
		return nil, ErrorWrong
	}
	u, b := auths.Load(id)
	if b {
		return u.(*Auth), nil
	}
	return nil, ErrorNotFind
}
