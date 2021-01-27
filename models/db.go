//Package models 数据库初始化
package models

import (
	"github.com/jinzhu/gorm"
	//数据库驱动包
	_ "github.com/jinzhu/gorm/dialects/mysql"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var db *gorm.DB

func init() {
	var err error
	// if runtime.GOOS == "darwin" || runtime.GOOS == "windows" {
	// 	db, err = gorm.Open("sqlite3", "o2m.db")
	// } else {
	// 	db, err = gorm.Open("mysql", "cdle:AsdF321_@(127.0.0.1:3306)/oa?charset=utf8&parseTime=True&loc=Local")
	// }
	db, err = gorm.Open("sqlite3", "o2m.db")
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&Auth{}, &User{}, &Message{})
	db.LogMode(true)

	as := []Auth{}
	db.Find(&as)
	for k := range as {
		as[k].Init()
		auths.Store(as[k].GetID(), &as[k])
	}
	us := []User{}
	db.Find(&us)
	for k := range us {
		us[k].Init()
		users.Store(us[k].GetID(), &us[k])
	}
	initMaxMessageID()
	storeChat()
}
