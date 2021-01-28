//Package models 用户消息处理
package models

import (
	"errors"
	"fmt"
	"strings"
	"sync"
	"time"
)

//最大消息ID
var maxMessageID int64

//最大消息ID读写锁
var messageIDLock sync.RWMutex

//消息存储队列
var chatStoreChan chan *Message

//initMaxMessageID 初始化最大消息ID
func initMaxMessageID() {
	m := Message{}
	db.Last(&m)
	maxMessageID = m.ID
}

//storeChat 存储消息
func storeChat() {
	chatStoreChan = make(chan *Message)
	go func() {
		for m := range chatStoreChan {
			if m.Type == 1 {
				readMessage(m.Fid, m.ID)
			} else {
				db.Create(m)
			}
		}
	}()
}

//initMaxMessageID 初始化最大消息ID
func generatorNextMessageID() int64 {
	messageIDLock.Lock()
	defer messageIDLock.Unlock()
	maxMessageID++
	return maxMessageID
}

//getMaxMessageID 获取最大消息ID
func getMaxMessageID() int64 {
	messageIDLock.RLock()
	defer messageIDLock.RUnlock()
	return maxMessageID
}

//Message 消息结构
type Message struct {
	ID      int64  `json:"id"`            //编号
	Rid     int32  `json:"rid"`           //接收方
	Fid     int32  `json:"fid"`           //发送方
	Time    int64  `json:"time"`          //时间
	Type    int32  `gorm:"-" json:"type"` //0 普通消息 1阅读消息 2其他消息
	Data    string `json:"data"`          //数据
	Readers string `json:"readers"`       //阅读者
	Mark    string `gorm:"-" json:"mark"` //客户端标记
}

//HandleMessage 消息处理
func (u *User) HandleMessage(m *Message) error {
	m.Time = time.Now().Local().UnixNano()
	m.Fid = u.GetID()
	// 分配客服
	m.Rid = u.GetRandomServerID(m.Rid)
	if m.Rid == 0 {
		return errors.New("客服不在线")
	}
	r, err := FetchUser(m.Rid)
	if err != nil {
		return err
	}
	if m.Type == 0 {
		m.ID = generatorNextMessageID()
		m.Readers = fmt.Sprint(m.Fid)
	}
	r.Push(m)
	u.Push(m)
	if m.Type < 2 {
		chatStoreChan <- m
	}
	return nil
}

//Connection 消息连接
type Connection interface {
	Push(m *Message)
	Destroy()
	GetUser() *User
}

//readMessage 阅读消息
func readMessage(uid int32, mid int64) error {
	tx := db.Begin()
	m := Message{}
	err := tx.Find(&m, mid).Error
	if err != nil {
		tx.Rollback()
		return err
	}
	uidS := fmt.Sprint(uid)
	readers := strings.Split(m.Readers, ",")
	for _, reader := range readers {
		if uidS == reader {
			tx.Rollback()
			return errors.New("已经阅读过消息")
		}
	}
	m.Readers += "," + uidS
	err = tx.Model(&m).Update("readers", m.Readers).Error
	if err != nil {
		tx.Rollback()
		return err
	}
	err = tx.Commit().Error
	if err != nil {
		return err
	}
	return nil
}

func GetClientHistoryMessage(cid int32) *[]Message {
	ms := []Message{}
	db.Where("fid = ? or rid = ?", cid, cid).Order("id desc").Find(&ms)
	return &ms
}
