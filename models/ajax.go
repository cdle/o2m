//Package models 用户消息处理
package models

import (
	"sync"
	"time"
)

//AjaxPolling 轮询
type AjaxPolling struct {
	//所属
	User *User
	//随机字符
	Random string
	//上次活跃
	ActiveAt time.Time
	//接收消息管道
	MessagesChan chan *Message
	//未消费消息
	IdleMessage []*Message
	//读写锁
	*sync.RWMutex
}

const WaittingTime = 5

//Init 连接初始化
func (a *AjaxPolling) Init(u *User, random string) *AjaxPolling {
	u.Lock()
	defer u.Unlock()
	for _, connection := range u.Connections {
		if ajax, ok := connection.(*AjaxPolling); ok && ajax.GetRandom() == random {
			ajax.Lock()
			defer ajax.Unlock()
			a.ActiveAt = time.Now()
			return ajax
		}
	}
	u.Connections = append(u.Connections, a)
	a.MessagesChan = make(chan *Message, 0)
	a.RWMutex = new(sync.RWMutex)
	a.User = u
	a.Random = random
	a.ActiveAt = time.Now()
	defer a.Destroy()
	return a
}

//Push 推送消息
func (a *AjaxPolling) Push(m *Message) {
	a.Lock()
	defer a.Unlock()
	select {
	case a.MessagesChan <- m:
	default:
		a.IdleMessage = append(a.IdleMessage, m)
	}
}

//GetActive 获取激活时间
func (a *AjaxPolling) GetActive() time.Time {
	a.RLock()
	defer a.RUnlock()
	return a.ActiveAt
}

//GetUser 获取所属用户
func (a *AjaxPolling) GetUser() *User {
	a.RLock()
	defer a.RUnlock()
	return a.User
}

//GetRandom 获取随机字符
func (a *AjaxPolling) GetRandom() string {
	a.RLock()
	defer a.RUnlock()
	return a.Random
}

//GetMessageChan 获取消息管道
func (a *AjaxPolling) GetMessageChan() <-chan *Message {
	a.RLock()
	defer a.RUnlock()
	return a.MessagesChan
}

//GetIdleMessage 获取消息管道
func (a *AjaxPolling) GetIdleMessage() []*Message {
	a.Lock()
	defer a.Unlock()
	if len(a.IdleMessage) > 0 {
		idleMessage := a.IdleMessage
		a.IdleMessage = []*Message{}
		return idleMessage
	}
	return nil
}

//Destroy 销毁虚拟连接
func (a *AjaxPolling) Destroy() {
	go func() {
		for {
			<-time.After(time.Second * (WaittingTime + 7))
			if time.Now().After(a.GetActive().Add((WaittingTime + 7))) {
				u := a.GetUser()
				u.Lock()
				for k, connection := range u.Connections {
					if ajax, ok := connection.(*AjaxPolling); ok && ajax.GetRandom() == a.GetRandom() {
						u.Connections = append((u.Connections)[:k], (u.Connections)[k+1:]...)
						u.Unlock()
						return
					}
				}
				u.Unlock()
			}
		}
	}()
}
