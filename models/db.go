//Package models 数据库初始化
package models

import (
	"github.com/gofrs/uuid"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// "github.com/jinzhu/gorm"
//数据库驱动包
// _ "github.com/jinzhu/gorm/dialects/mysql"
// _ "github.com/jinzhu/gorm/dialects/sqlite"

var db *gorm.DB

func init() {
	var err error
	// if runtime.GOOS == "darwin" || runtime.GOOS == "windows" {
	// 	db, err = gorm.Open("sqlite3", "o2m.db")
	// } else {
	// 	db, err = gorm.Open("mysql", "cdle:AsdF321_@(127.0.0.1:3306)/oa?charset=utf8&parseTime=True&loc=Local")
	// }
	// db, err = gorm.Open("mysql", "root:123456tT(hass.imdraw.com:3306)/o2m?charset=utf8&parseTime=True&loc=Local")
	// db, err = gorm.Open("sqlite3", "o2m.db")
	// dsn := "root:AsdF321root@tcp(io.imdraw.com:3306)/o2m?charset=utf8&parseTime=True&loc=Local"
	// db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
	// 	Logger: logger.Default.LogMode(logger.Info),
	// })
	db, err = gorm.Open(sqlite.Open("o2m.db"), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&Auth{}, &User{}, &Message{})

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

//GeneratorUUID 生成uuid
func GeneratorUUID() string {
	v, _ := uuid.NewV4()
	return v.String()
}
