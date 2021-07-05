package main

import (
	"github.com/astaxie/beego"

	"github.com/cdle/o2m/controllers"
	_ "github.com/cdle/o2m/routers"
	_ "github.com/cdle/steady"
)

//main 入口程序
func main() {
	beego.BConfig.WebConfig.AutoRender = false
	beego.BConfig.WebConfig.Session.SessionOn = true
	beego.BConfig.WebConfig.DirectoryIndex = true
	beego.BConfig.WebConfig.StaticDir["/swagger"] = "swagger"
	beego.BConfig.WebConfig.Session.SessionProvider = "file"
	beego.BConfig.WebConfig.Session.SessionProviderConfig = "./session"
	beego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 360000
	beego.SetStaticPath("/", beego.AppConfig.String("www"))
	beego.ErrorController(&controllers.ErrorController{})
	beego.Run()
}

// git add . && git commit -m "update" && git push
