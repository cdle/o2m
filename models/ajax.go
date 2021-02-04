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
	//请求次数
	Times int
}

const WaittingTime = 5

//Init 连接初始化
func (a *AjaxPolling) Init(u *User, random string) *AjaxPolling {
	u.Lock()
	defer u.Unlock()
	for _, connection := range u.Connections {
		if ajax, ok := connection.(*AjaxPolling); ok && ajax.GetRandom() == random {
			// fmt.Println("old")
			ajax.Times++
			return ajax
		}
	}
	// fmt.Println("new")
	u.Connections = append(u.Connections, a)
	a.MessagesChan = make(chan *Message, 0)
	a.RWMutex = new(sync.RWMutex)
	a.User = u
	a.Random = random
	a.Times++
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

//Note 激活
func (a *AjaxPolling) Note() {
	a.GetUser().Note()
	a.Lock()
	a.ActiveAt = time.Now()
	a.Unlock()
}

//GetUser 获取所属用户
func (a *AjaxPolling) GetUser() *User {
	a.RLock()
	defer a.RUnlock()
	return a.User
}

//GetTimes 获取次数
func (a *AjaxPolling) GetTimes() int {
	a.RLock()
	defer a.RUnlock()
	return a.Times
}

//GetTimes 获取次数
func (a *AjaxPolling) AddTimes() {
	a.Lock()
	defer a.Unlock()
	a.Times++
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
		for { //可以优化至用户
			// fmt.Println("======")
			<-time.After(time.Second)
			u := a.GetUser()
			if time.Now().After(a.GetActive().Add(5*time.Second + time.Millisecond*100)) {
				u.Lock()
				for k, connection := range u.Connections {
					if ajax, ok := connection.(*AjaxPolling); ok && ajax.GetRandom() == a.GetRandom() {
						u.Connections = append((u.Connections)[:k], (u.Connections)[k+1:]...)
						u.Unlock()
						///客户离线推送
						// fmt.Println("/////", u.GetRole(), u.Online(), "destroy")
						if u.GetRole() >= 3 && !u.Online() {
							if sid := u.GetServerID(); sid != 0 {
								s, _ := FetchUser(sid)
								// fmt.Println(s)
								s.Push(&Message{
									Fid:  u.GetID(),
									Type: 3,
									Data: "offline",
								})
							}
						}
						///
						db.Table("users").Where("id = ?", u.ID).Update("note_at", u.GetNoteAt())
						return
					}
				}
				u.Unlock()
			}
		}
	}()
}
