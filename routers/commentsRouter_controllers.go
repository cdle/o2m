package routers

import (
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context/param"
)

func init() {

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:AuthController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:AuthController"],
        beego.ControllerComments{
            Method: "Login",
            Router: "/login",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:AuthController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:AuthController"],
        beego.ControllerComments{
            Method: "Logout",
            Router: "/logout",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:AuthController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:AuthController"],
        beego.ControllerComments{
            Method: "ChangePassword",
            Router: "/password",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:AuthController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:AuthController"],
        beego.ControllerComments{
            Method: "Register",
            Router: "/register",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:MessageController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:MessageController"],
        beego.ControllerComments{
            Method: "SendMessage",
            Router: "/",
            AllowHTTPMethods: []string{"post"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:MessageController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:MessageController"],
        beego.ControllerComments{
            Method: "ReceiveMessage",
            Router: "/polling",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:MessageController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:MessageController"],
        beego.ControllerComments{
            Method: "GetClientHistoryMessage",
            Router: "/record",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:UserController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:UserController"],
        beego.ControllerComments{
            Method: "UserInfo",
            Router: "/?:uid([0-9]*)",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:UserController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:UserController"],
        beego.ControllerComments{
            Method: "UserUpdate",
            Router: "/?:uid([1-9][0-9]*)",
            AllowHTTPMethods: []string{"put"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

    beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:UserController"] = append(beego.GlobalControllerRouter["github.com/cdle/o2m/controllers:UserController"],
        beego.ControllerComments{
            Method: "UserList",
            Router: "/list",
            AllowHTTPMethods: []string{"get"},
            MethodParams: param.Make(),
            Filters: nil,
            Params: nil})

}
