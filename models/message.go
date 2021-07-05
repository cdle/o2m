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
	//("chatStoreChan = make(chan *Message)")
	go func() {
		for m := range chatStoreChan {
			//("or m := range chatStoreChan {")
			if m.Type == 1 {
				//("if m.Type == 1 {")
				if err := readMessage(m.Fid, m.ID); err != nil {
					//("if err := readMessage(m.Fid, m.ID); err != nil {")
					chatStoreChan <- m
					//("chatStoreChan <- m")
				}
				//("if err := readMessage(m.Fid, m.ID); err == nil {")
			} else {
				//("} else {")
				if err := db.Create(m).Error; err != nil {
					//("if err := db.Create(m).Error; err != nil {")
					chatStoreChan <- m
				}
				//("if err := db.Create(m).Error; err == nil {")
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
	//("m.Time = time.Now().Local().UnixNano()")
	m.Fid = u.GetID()
	//("u.GetID()")
	m.Rid = u.GetRandomServerID(m.Rid)
	//("u.GetRandomServerID(m.Rid)")
	if m.Rid == 0 && m.Type == 0 {
		//("if m.Rid == 0 && m.Type == 0 {")
		if u.GetRole() <= 2 {
			//("if u.GetRole() <= 2 {")
			return errors.New("Rid is required.")
		}
		//("if u.GetRole() > 2 {")
		m.ID = generatorNextMessageID()
		//("m.ID = generatorNextMessageID()")
		m.Readers = fmt.Sprint(m.Fid)
		//("m.Readers = fmt.Sprint(m.Fid)")
		u.Push(m)
		//("u.Push(m)")
		chatStoreChan <- m
		//("chatStoreChan <- m")
		r := &Message{
			Rid:  u.GetID(),
			Data: "Customer service is not online, please visit again in a few minutes.",
		}
		//("r := &Message{")
		r.ID = generatorNextMessageID()
		//("r.ID = generatorNextMessageID()")
		r.Time = m.Time
		//("r.Time = m.Time")
		u.Push(r)
		//("u.Push(r)")
		chatStoreChan <- r
		//("chatStoreChan <- r")
	} else {
		var r *User
		//("var r *User")
		var err error
		//("var err error")
		if m.Rid != 0 {
			//("if m.Rid != 0 {")
			if r, err = FetchUser(m.Rid); err != nil {
				//("if r, err = FetchUser(m.Rid); err != nil {")
				return err
			}
		}
		if m.Type == 0 {
			//("if m.Type == 0 {")
			m.ID = generatorNextMessageID()
			//("m.ID = generatorNextMessageID()")
			m.Readers = fmt.Sprint(m.Fid)
			//("m.Readers = fmt.Sprint(m.Fid)")
		}
		if m.Rid != 0 {
			//("if m.Rid != 0 {")
			r.Push(m)
			//("r.Push(m)")
		}
		u.Push(m)
		//("u.Push(m)")
		if m.Type < 2 {
			//("if m.Type < 2 {")
			chatStoreChan <- m
		}
		//("?????")
	}
	return nil
}

//StoreMessage 储存消息
func StoreMessage(m *Message) {
	m.ID = generatorNextMessageID()
	chatStoreChan <- m
}

//Connection 消息连接
type Connection interface {
	Push(m *Message)
	Destroy()
	GetUser() *User
	GetRandom() string
}

//readMessage 阅读消息
func readMessage(uid int32, mid int64) error {
	m := Message{}
	err := db.Find(&m, mid).Error
	if err != nil {
		return err
	}
	uidS := fmt.Sprint(uid)
	readers := strings.Split(m.Readers, ",")
	for _, reader := range readers {
		if uidS == reader {
			return nil
		}
	}
	if m.Readers != "" {
		m.Readers += "," + uidS
	} else {
		m.Readers = uidS
	}
	err = db.Model(&m).Update("readers", m.Readers).Error
	if err != nil {
		return err
	}
	return nil
}

func GetClientHistoryMessage(cid int32) *[]Message {
	ms := []Message{}
	db.Where("fid = ? or rid = ?", cid, cid).Order("id asc").Find(&ms)
	return &ms
}
