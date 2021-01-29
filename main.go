package main

import (
	"github.com/astaxie/beego"

	_ "github.com/cdle/o2m/routers"
	_ "github.com/cdle/steady"
)

//main 入口程序
func main() {
	// if beego.BConfig.RunMode == "dev" {
	beego.BConfig.WebConfig.DirectoryIndex = true
	beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	beego.BConfig.WebConfig.Session.SessionProvider = "file"
	beego.BConfig.WebConfig.Session.SessionProviderConfig = "./session"
	beego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 360000
	// }
	beego.Run()
}

// git add . && git commit -m "update" && git push
