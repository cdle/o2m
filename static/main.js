(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/page-not-found.component.ts":
/*!*************************************************!*\
  !*** ./src/app/404/page-not-found.component.ts ***!
  \*************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




var _c0 = function () { return ["/"]; };
var _c1 = function () { return { "font-size": "14px" }; };
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageHeight = window.innerHeight;
        this.pageWidth = window.innerWidth;
        console.log({
            DATA: this.pageHeight,
            SDGS: this.pageWidth
        });
        window.onresize = function (event) {
            _this.pageHeight = window.innerHeight;
            _this.pageWidth = window.innerWidth;
        };
    };
    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 8, vars: 4, consts: [[1, "d-flex", "justify-content-center", "align-items-center", 2, "font-size", "40px", "height", "100%"], [1, ""], [2, "font-size", "200%"], [3, "routerLink", "ngStyle"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Page Not Found");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "back to index page");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLzQwNC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
    return PageNotFoundComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/server.component */ "./src/app/server/server.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/manage/manage.component.ts");
/* harmony import */ var _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./404/page-not-found.component */ "./src/app/404/page-not-found.component.ts");









var routes = [
    { path: 'auth', loadChildren: function () { return __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(function (mod) { return mod.AuthModule; }); } },
    { path: 'client', component: _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"] },
    { path: 'server', component: _server_server_component__WEBPACK_IMPORTED_MODULE_4__["ServerComponent"] },
    { path: 'manage', component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManageComponent"] },
    { path: '', redirectTo: '/client', pathMatch: 'full' },
    { path: '**', component: _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.com.previewOption.isShowMask = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.com.previewOption.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(com) {
        this.com = com;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[1, "alert"], ["class", "mask ie-scroll other-scroll", 3, "click", 4, "ngIf"], [1, "mask", "ie-scroll", "other-scroll", 3, "click"], ["onerror", "this.src='/assets/images/error.jpg'", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 1, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]((ctx.com.alert == null ? null : ctx.com.alert.show) ? "" : "d-none");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.com.alert == null ? null : ctx.com.alert.msg);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.com.previewOption.isShowMask);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".mask[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    background: rgba(0,0,0,.5);\r\n    z-index: 999;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    overflow: auto;\r\n}\r\n.mask[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHNCQUFtQjtRQUFuQixtQkFBbUI7SUFDbkIscUJBQXVCO1FBQXZCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hc2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4ubWFzayBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./server/server.component */ "./src/app/server/server.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/manage/manage.component.ts");
/* harmony import */ var _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./404/page-not-found.component */ "./src/app/404/page-not-found.component.ts");
/* harmony import */ var _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/send-area/send-area.component */ "./src/app/shared/send-area/send-area.component.ts");
/* harmony import */ var _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/edit-operate/edit-operate.component */ "./src/app/shared/edit-operate/edit-operate.component.ts");
/* harmony import */ var _shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/chat-content/chat-content.component */ "./src/app/shared/chat-content/chat-content.component.ts");
/* harmony import */ var _core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/to-safe.pipe */ "./src/app/core/to-safe.pipe.ts");
/* harmony import */ var _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/chat-unread/chat-unread.component */ "./src/app/shared/chat-unread/chat-unread.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
        _server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"],
        _manage_manage_component__WEBPACK_IMPORTED_MODULE_9__["ManageComponent"],
        _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
        _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_11__["SendAreaComponent"],
        _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_12__["EditOperateComponent"],
        _shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_13__["ChatContentComponent"],
        _core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_14__["ToSafePipe"],
        _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_15__["ChatUnreadComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
                    _server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"],
                    _manage_manage_component__WEBPACK_IMPORTED_MODULE_9__["ManageComponent"],
                    _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                    _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_11__["SendAreaComponent"],
                    _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_12__["EditOperateComponent"],
                    _shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_13__["ChatContentComponent"],
                    _core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_14__["ToSafePipe"],
                    _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_15__["ChatUnreadComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/chat-content/chat-content.component */ "./src/app/shared/chat-content/chat-content.component.ts");
/* harmony import */ var _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/chat-unread/chat-unread.component */ "./src/app/shared/chat-unread/chat-unread.component.ts");
/* harmony import */ var _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/edit-operate/edit-operate.component */ "./src/app/shared/edit-operate/edit-operate.component.ts");
/* harmony import */ var _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/send-area/send-area.component */ "./src/app/shared/send-area/send-area.component.ts");









function ClientComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
} }
function ClientComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5360\u4F4D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/client#" + ctx_r1.unreadOption.chatID, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var ClientComponent = /** @class */ (function () {
    function ClientComponent(com, route) {
        this.com = com;
        this.route = route;
        this.chatList = [];
        this.keepEnd = false;
        // 文件列表
        this.files = [];
        // 编辑框数组
        this.editData = [];
        this.unreadOption = { unread: 0 };
        this.historyLen = 0;
        this.reconnect = false;
    }
    ClientComponent.prototype.ngOnInit = function () {
        // domain=xx&mall=xxx
        var search = window.location.search.substring(1);
        var random = Date.now().toString();
        this.com.pollingStart(this, random, search);
        this.chatElem = document.getElementById('chat');
    };
    ClientComponent.prototype.chatScroll = function (e) {
        //console.log('chatScroll: ', e.target.scrollTop);
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        console.log('client ngOnDestroy: ');
        this.com.sendMsg({ type: 2, data: 'offline' });
    };
    ClientComponent.prototype.sendListen = function (content) {
        content.isServer = false;
        content.position = false;
        this.chatList.push(content);
    };
    ClientComponent.prototype.fileEmiter = function (e) {
        this.keepEnd = !this.keepEnd;
    };
    ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 19, vars: 8, consts: [["id", "main", 1, "container", "clearfix"], ["id", "title", 1, "title", "bg-base", "noselect"], ["src", "assets/images/logo.png", "ondragStar", "return false", "id", "logo", 1, "vm"], [1, "fr", "name"], ["class", "mr-1 blink text-red", 4, "ngIf"], [1, "content", "pos-r"], ["id", "chat", 1, "chat", "ie-scroll", "other-scroll", 3, "scroll"], [1, "chat-details"], [3, "chatList", "sendListen"], ["id", "linkToChatID", 3, "href", 4, "ngIf"], [3, "who", "unread"], ["id", "edit", 1, "edit-area"], [3, "who", "fileEmiter"], [3, "keepEnd", "who", "sendListen"], [1, "mr-1", "blink", "text-red"], ["id", "linkToChatID", 3, "href"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5728\u7EBF\u5BA2\u670D");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ClientComponent_span_6_Template, 1, 0, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ClientComponent_Template_div_scroll_8_listener($event) { return ctx.chatScroll($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u5546\u57CE\u5BA2\u670D\u5DE5\u4F5C\u65F6\u95F4\u4E3A\u5DE5\u4F5C\u65E5\u76849:00~21:00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "chat-content", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendListen", function ClientComponent_Template_chat_content_sendListen_13_listener($event) { return ctx.sendListen($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClientComponent_a_14_Template, 2, 1, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "chat-unread", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "edit-operate", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileEmiter", function ClientComponent_Template_edit_operate_fileEmiter_17_listener($event) { return ctx.fileEmiter($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "send-area", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendListen", function ClientComponent_Template_send_area_sendListen_18_listener($event) { return ctx.sendListen($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reconnect);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatList", ctx.chatList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unreadOption.chatID);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx)("unread", ctx.unreadOption.unread);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keepEnd", ctx.keepEnd)("who", ctx);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_4__["ChatContentComponent"], _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_5__["ChatUnreadComponent"], _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_6__["EditOperateComponent"], _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_7__["SendAreaComponent"]], styles: [".blink[_ngcontent-%COMP%]{\r\n    margin-right: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsaW5re1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59Il19 */"] });
    return ClientComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client',
                templateUrl: './client.component.html',
                styleUrls: ['./client.component.css'],
            }]
    }], function () { return [{ type: _core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/com.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/com.service.ts ***!
  \*************************************/
/*! exports provided: ComService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComService", function() { return ComService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







var ComService = /** @class */ (function () {
    function ComService(http, router) {
        this.http = http;
        this.router = router;
        // 错误消息提示
        this.alert = { msg: '', show: false };
        this.data = {};
        this.previewOption = {
            isShowMask: false,
        };
        this.api = {
            login: '/api/auth/login',
            register: '/api/auth/register',
            message: '/api/message/',
            polling: '/api/message/polling',
            history: '/api/message/record',
            userList: '/api/user/list',
            logout: '/api/auth/logout',
            userInfo: '/api/user/',
            files: '/file/',
        };
        this.who = null; // 是客服对象还是客户对象
        this.isLogin = true;
        this.isWindowActive = true;
        // 记录上一个时间避免重复时间显示
        this.tmpTime = '';
        this.windowActive();
    }
    // 格式化时间
    ComService.prototype.formatTime = function (date /* 日期，可选默认今天 */, fmt /*格式字符串默认YYYY-MM-DD hh:mm:ss */) {
        if (date === void 0) { date = ''; }
        if (fmt === void 0) { fmt = 'YYYY-MM-DD'; }
        //兼容ios
        if (typeof date === 'string') {
            date = date.replace(/-/g, '/');
        }
        date = date ? new Date(date) : new Date();
        var o = {
            'Y+': date.getFullYear(),
            'M+': date.getMonth() + 1,
            'D+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            S: date.getMilliseconds(),
        };
        if (/(Y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (o['Y+'] + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1
                    ? o[k]
                    : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return fmt;
    };
    ComService.prototype.timeFromNow = function (time) {
        //时间转换
        var timestamp = Date.now();
        var createTime = new Date(time);
        time = createTime.getTime();
        var diff = timestamp - time;
        if (diff < 60 * 1000) {
            return '';
        }
        else if (diff < 60 * 60 * 1000) {
            return Math.floor(diff / (60 * 1000)) + '分钟前';
        }
        else if (diff < 24 * 60 * 60 * 1000) {
            return Math.floor(diff / (60 * 60 * 1000)) + '小时前';
        }
        else {
            return this.formatTime(time, 'YYYY-MM-DD hh:mm');
        }
    };
    ComService.prototype.windowActive = function () {
        var _this = this;
        var hiddenProperty = 'hidden' in document
            ? 'hidden'
            : 'webkitHidden' in document
                ? 'webkitHidden'
                : 'mozHidden' in document
                    ? 'mozHidden'
                    : null;
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        var onVisibilityChange = function () {
            if (document[hiddenProperty]) {
                // 未激活状态！-发送桌面通知
                this.isWindowActive = true;
            }
            else {
                // '激活状态！
                this.isWindowActive = false;
            }
        };
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
        window.onblur = function () {
            console.log('onblur: ');
            _this.isWindowActive = false;
        };
        window.onfocus = function () {
            console.log('onfocus: ');
            // 激活窗口- 未读消息
            _this.sendReadedMsg();
            _this.isWindowActive = true;
        };
        /* window.onbeforeunload = () => {
           console.log('beforeunload');
           
           if (this.who) {
             if ('rid' in this.who) {
               // 给在线用户发
               this.who.userList.forEach((el) => {
                 el.state && this.sendMsgSync({ type: 2, data: 'offline', rid: el.id },null);
               });
             } else {
               this.sendMsgSync({ type: 2, data: 'offline' },null);
             }
             return  confirm("Do you really want to close?") ;
           }
         };*/
    };
    ComService.prototype.showAlert = function (msg) {
        var _this = this;
        this.alert.show = true;
        this.alert.msg = msg;
        setTimeout(function () {
            _this.alert.show = false;
        }, 2000);
    };
    ComService.prototype.doHttpResponse = function (res, success, fail) {
        var _this = this;
        var code = res.code;
        if (code) {
            if (code === 3 || code === 6) {
                // 未登录
                this.isLogin = false;
                this.showAlert('登录失效，请重新登录');
                setTimeout(function () {
                    _this.router.navigate(['/auth/login']);
                }, 2000);
            }
            else {
                fail ? fail(res) : this.showAlert(res.msg);
            }
        }
        else {
            // 成功
            success && success(res.data);
        }
    };
    // async sendMsgSync(msg ,fail){
    //   let res = await this.http.post(this.api.message, msg)
    //   .pipe(
    //     catchError(
    //       this.handleError('sendMsg', () => {
    //         fail && fail();
    //       })
    //     )
    //   )
    //   console.log('res',res)
    // }
    // 发送消息
    ComService.prototype.sendMsg = function (msg, success, fail) {
        var _this = this;
        this.http
            .post(this.api.message, msg)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('sendMsg', function () {
            fail && fail();
        })))
            .subscribe(function (res) {
            _this.doHttpResponse(res, function (data) {
                success && success(data);
            }, fail);
        });
    };
    ComService.prototype.handleError = function (uri, failCallback) {
        var _this = this;
        return function (error) {
            if (failCallback) {
                setTimeout(function () {
                    failCallback();
                }, 3000);
            }
            else {
                _this.showAlert('http request ' + uri + ' error ');
            }
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('A client-side or network error occurred. Handle it accordingly.');
                _this.showAlert('网络错误');
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong.
                console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
                _this.showAlert('后端服务器错误');
            }
            // Return an observable with a user-facing error message.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
        };
    };
    // 开启轮询
    ComService.prototype.pollingStart = function (obj, random, domain) {
        var _this = this;
        obj.reconnect = false;
        !this.who && (this.who = obj);
        var options = {
            observe: 'response',
        };
        this.http
            .get(this.api.polling + '?random=' + random + (domain ? '&' + domain : ''), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('polling', function () {
            obj.reconnect = true;
            _this.pollingStart(obj, random, domain);
        })))
            .subscribe(function (res) {
            if (!obj.myID) {
                obj.myID = Number(res.headers.get('Uid'));
            }
            // 新建立的连接，要渲染历史记录
            var isNewConnect = res.headers.get('Request-Times') === '1';
            var ret = res.body;
            var isServer = 'rid' in obj;
            _this.doHttpResponse(ret, function (data) {
                if (isNewConnect) {
                    if (!isServer) {
                        // 客户端处理历史记录
                        data && data.length && _this.doHistory(data, obj);
                    }
                }
                else {
                    // 渲染数据到聊天窗口
                    data && data.length && _this.doPolling(data, obj, isServer);
                }
            });
            // 获取到数据-直接轮询
            _this.isLogin && _this.pollingStart(obj, random, domain);
        });
    };
    // 图片预览
    ComService.prototype.preview = function (file, callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            callback(e.target.result);
        };
    };
    // 上传文件
    ComService.prototype.uploadFile = function (fileObj, callback, progressCallback) {
        var _this = this;
        var formData = new FormData();
        formData.append('file', fileObj.file);
        var api = 'https://io.imdraw.com:444';
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', api, formData, {
            reportProgress: true,
        });
        this.http
            .request(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('uploadFile', function () {
            callback(fileObj, true);
            _this.showAlert('文件服务器故障!');
        })))
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                fileObj.uploadProgress = Math.round((100 * event.loaded) / event.total);
                progressCallback && progressCallback(fileObj);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                var body = event.body;
                fileObj.src = api + '/' + body.key;
                fileObj.type === 'file' && (fileObj.src += '?operation=download');
                callback(fileObj);
            }
        });
    };
    /**
     * // fid 接收者=我 右， 不是我 左
     * @param data
     * @param obj
     * @param isServer
     */
    ComService.prototype.doPolling = function (data, obj, isServer) {
        var _this = this;
        data.forEach(function (d) {
            var fid = d.fid;
            var isISend = fid === obj.myID;
            var type = d.type;
            switch (type) {
                // 普通消息
                case 0:
                    _this.doType0(isISend, obj, d, isServer);
                    break;
                // 已读未读消息
                case 1:
                    _this.doType1(d, obj, isISend, isServer);
                    break;
                case 2:
                    _this.doType2(d, obj, isISend, isServer);
                    break;
                // 上下线消息
                case 3:
                    _this.doType3(isISend, d, isServer, obj);
                    break;
            }
        });
    };
    // 处理已读未读消息
    ComService.prototype.doType1 = function (d, obj, isISend, isServer) {
        // 已读未读消息
        if (!isISend) {
            if (isServer) {
                // 服务端
                // 发来的是自己吗-是的话就不用改变-不是就要判断
                if (!isISend) {
                    // 判断发来的是当前用户吗
                    var isCuUserSend = obj.user.id === d.fid;
                    if (isCuUserSend) {
                        // 当前用户发来的设置已读
                        var i = obj.chatList.findIndex(function (x) { return x.id === d.id; });
                        // i > -1 && (obj.chatList[i].readed = true) 
                        if (i > -1) {
                            for (var j = i; j >= 0; j--) {
                                obj.chatList[j].readed = true;
                            }
                        }
                    }
                }
            }
            else {
                // 客户端
                var i = obj.chatList.findIndex(function (x) { return x.id === d.id; });
                // i > -1 && (obj.chatList[i].readed = true);
                if (i > -1) {
                    for (var j = i; j >= 0; j--) {
                        obj.chatList[j].readed = true;
                    }
                }
            }
        }
    };
    //  处理特殊消息
    ComService.prototype.doType2 = function (d, obj, isISend, isServer) {
        console.log('doType2: ', isISend);
        // 下线消息
        if (!isISend) {
            if (d.data === 'offline') {
                var who = this.setName(d, isServer ? obj.user : obj, isServer);
                this.showAlert(who + '下线');
                if (isServer) {
                    var i = obj.chatList.findIndex(function (x) { return x.id === d.fid; });
                    i > -1 && (obj.chatList[i].state = false);
                }
            }
        }
    };
    // 处理上下限消息
    ComService.prototype.doType3 = function (isISend, d, isServer, obj) {
        isISend &&
            this.showAlert('游客' + d.fid + (d.data === 'online' ? '上' : '离') + '线');
        // 客服端 处理一下用户列表用户上下线显示
        if (isServer) {
            var i = obj.userList.findIndex(function (x) { return x.id === d.fid; });
            i > -1 && (obj.userList[i].state = d.data === 'online');
        }
    };
    ComService.prototype.doType0 = function (isISend, obj, d, isServer) {
        var _this = this;
        var fid = d.fid;
        var isCuUserSend = isServer ? obj.user.id === fid : !isISend;
        // 设置消息的左右显示
        this.attachSPT(obj, d, isServer);
        // 收到消息是窗口状态
        if (this.isWindowActive) {
            // 窗口激活
            if (!isISend) {
                // 当前用户发来的不是我发的消息发来一条读一条，跳底部
                if ((isServer && isCuUserSend) || !isServer) {
                    // 对方的消息-发来一条读一条
                    var readedMsg = { id: d.id, type: 1 };
                    isServer && (readedMsg.rid = obj.user.id);
                    this.sendMsg(readedMsg);
                    obj.chatList.push(d);
                    this.jumpToChatBottom(obj);
                }
                else if (isServer && !isCuUserSend) {
                    // 不管用户在不在列表中消息数+1;在列表的用户不要获取用户信息，不在的要获取
                    var userIndex = obj.userList.findIndex(function (u) { return u.id === fid; });
                    var isInUserList = userIndex > -1;
                    if (isInUserList) {
                        var userInfo = obj.userList[userIndex];
                        this.notifyAndUnreadPlus(userInfo, d, isServer);
                    }
                    else {
                        this.getUserInfo(fid, function (userInfo) {
                            _this.notifyAndUnreadPlus(userInfo, d, isServer);
                            obj.userList.unshift(userInfo);
                        });
                    }
                }
            }
            else {
                // 是我发的消息-融合消息信息
                var i = obj.chatList.findIndex(function (x) { return x.mark === d.mark; });
                i === -1 ? obj.chatList.push(d) : Object.assign(obj.chatList[i], d);
            }
        }
        else {
            // 收到消息时窗口未激活
            if (!isISend) {
                // 当前用户发来的不是我发的消息未读+1，消息推入，跳底部
                obj.chatList.push(d);
                if ((isServer && isCuUserSend) || !isServer) {
                    var userInfo = isServer ? obj.user : obj;
                    this.notifyAndUnreadPlus(userInfo, d, isServer);
                    this.jumpToChatBottom(obj);
                }
                else if (isServer && !isCuUserSend) {
                    // 不管用户在不在列表中消息数+1;在列表的用户不要获取用户信息，不在的要获取
                    var userIndex = obj.userList.findIndex(function (u) { return u.id === fid; });
                    var isInUserList = userIndex > -1;
                    if (isInUserList) {
                        var userInfo = obj.userList[userIndex];
                        this.notifyAndUnreadPlus(userInfo, d, isServer);
                    }
                    else {
                        this.getUserInfo(fid, function (userInfo) {
                            _this.notifyAndUnreadPlus(userInfo, d, isServer);
                            obj.userList.unshift(userInfo);
                        });
                    }
                }
            }
            else {
                // 是我发的消息-融合消息信息
                var i = obj.chatList.findIndex(function (x) { return x.mark === d.mark; });
                i === -1 ? obj.chatList.push(d) : Object.assign(obj.chatList[i], d);
            }
        }
    };
    // userInfo = clientObj||serverObj.user
    ComService.prototype.notifyAndUnreadPlus = function (userInfo, d, isServer) {
        userInfo.state = true;
        var name = this.setName(d, userInfo, isServer);
        this.deskNotify(name, d.data);
        this.setUnreadPlus(userInfo, d);
    };
    ComService.prototype.setName = function (d, user, isServer) {
        return isServer ? (user.name ? '用户' + user.name : '游客' + d.fid) : '客服回复';
    };
    ComService.prototype.setUnreadPlus = function (userInfo, msg) {
        userInfo.unreadOption = userInfo.unreadOption || {
            unread: 0,
            chatID: '',
            id: [],
        };
        userInfo.unreadOption.unread++;
        !userInfo.unreadOption.chatID &&
            (userInfo.unreadOption.chatID = 'chatList' + msg.id);
        userInfo.unreadOption.id.push(msg.id);
        this.updateUnreadStorage(userInfo.id, userInfo.unreadOption);
    };
    // 窗口激活的时候如果第一条未读消息id 在可视区域，依次发送已读消息，未读消息数清0
    // 第一跳不在可视区域那么显示未读消息数
    ComService.prototype.sendReadedMsg = function () {
        var _this = this;
        if (this.who) {
            var isServer = 'rid' in this.who;
            var unreadParentObj = isServer ? this.who.user : this.who;
            if (unreadParentObj) {
                var unreadOption = unreadParentObj.unreadOption;
                if (unreadOption && unreadOption.id && unreadOption.id.length) {
                    var id = unreadOption.id[0];
                    if (id) {
                        this.inViewToSendReadMsg(unreadParentObj, this.who, 'chatList' + id);
                    }
                }
            }
            else {
                setTimeout(function () {
                    _this.sendReadedMsg();
                }, 1000);
            }
        }
        else {
            setTimeout(function () {
                _this.sendReadedMsg();
            }, 1000);
        }
    };
    // 设置我的消息为已读的
    ComService.prototype.setMyInfoReaded = function (obj) {
        var clen = obj.chatList.length;
        for (var i = obj.historyLen; i < clen; i++) {
            var dd = obj.chatList[i];
            if (dd.fid === obj.myID) {
                // 我发送的都被当作已读的
                dd.readed = true;
            }
        }
        obj.historyLen = clen;
    };
    ComService.prototype.updateUnreadStorage = function (id, unreadOption) {
        var storage = window.localStorage.unread;
        try {
            storage = (storage && JSON.parse(storage)) || {};
        }
        catch (e) {
            storage = {};
        }
        storage[id] = unreadOption;
        window.localStorage.unread = JSON.stringify(storage);
    };
    // 处理历史消息
    ComService.prototype.doHistory = function (data, obj) {
        var isServer = 'rid' in obj;
        // 顺次执行判断显示左右
        this.attachSPTWidthArr(data, obj, isServer);
        obj.chatList = data;
        // 设置我未读unreadOption 和 对方已读
        // 我未读- 对方发的信息-没有两个读者-不在可视区
        // 对方的消息 => 从后读-遇到我的消息对方的消息就是已读的，如果还是对方的消息，那么看是否有两个读者-在不在可视区域
        this.setReadInfo(data, obj, isServer);
    };
    // 设置消息已读和未读
    ComService.prototype.setReadInfo = function (data, obj, isServer) {
        var len = (obj.historyLen = data.length);
        var unreadParentObj = isServer ? obj.user : obj;
        unreadParentObj.unreadOption = { unread: 0, id: [] };
        var rightMsgReaded = false;
        var rightStopIndex = -1;
        var leftMsgReaded = false;
        for (var i = len; i--;) {
            var d = data[i];
            var isDbReaders = d.readers.split(',').length > 1;
            var isIsend = d.fid === obj.myID;
            var isSysMsg = d.fid === 0;
            // 客服端自己发的消息== 系统消息和自己发的消息
            isServer && (isIsend = isSysMsg || isIsend);
            if (isIsend) {
                leftMsgReaded = true;
                if (isDbReaders) {
                    // 有两读者，我发的消息都读了
                    rightMsgReaded = true;
                    // 停止判断
                    rightStopIndex = i;
                    break;
                }
                else {
                    // 我的消息对方未读，读者只有一个
                    d.readed = rightMsgReaded;
                    // 判读下一个
                }
            }
            else {
                // 我的消息它都读了-判断他的消息我读没读
                rightMsgReaded = true;
                rightStopIndex = i;
                if (isDbReaders) {
                    // 有两读者
                    leftMsgReaded = true;
                    break;
                }
                else {
                    // 对方这条消息我没读，看下一个
                    if (!leftMsgReaded) {
                        unreadParentObj.unreadOption.unread++;
                        unreadParentObj.unreadOption.id.push(d.id);
                    }
                    !unreadParentObj.unreadOption.chatID &&
                        (unreadParentObj.unreadOption.chatID = 'chatList' + d.id);
                }
            }
        }
        // 设置我的消息对方已读
        if (rightMsgReaded && rightStopIndex > -1) {
            for (var i = rightStopIndex + 1; i--;) {
                data[i].readed = true;
            }
        }
        // 看要不要清空未读记录-在不在可视区
        this.inViewToSendReadMsg(unreadParentObj, obj);
        // if(isServer){
        //   this.updateUnreadStorage(obj.user.id,unreadParentObj.unreadOption)
        // }
        // 设置跳转到我未读的消息处
        // this.jumpToUnread(obj);
        // 历史跳转到底部
        this.jumpToChatBottom(obj);
    };
    ComService.prototype.jumpToChatBottom = function (obj) {
        setTimeout(function () {
            obj.chatElem.scrollTop = obj.chatElem.scrollHeight;
        }, 1000);
    };
    // 跳转到未读消息处
    ComService.prototype.jumpToUnread = function (obj) {
        var _this = this;
        var isServer = 'rid' in obj;
        var unreadParentObj = isServer ? obj.user : obj;
        if (unreadParentObj.unreadOption.unread) {
            setTimeout(function () {
                var a = document.getElementById('linkToChatID');
                a && a.click();
                setTimeout(function () {
                    _this.inViewToSendReadMsg(unreadParentObj, obj);
                }, 1500);
            }, 1000);
        }
    };
    ComService.prototype.inViewToSendReadMsg = function (unreadParentObj, obj, id) {
        var _this = this;
        var nowAt = document.getElementById(id || unreadParentObj.unreadOption.chatID);
        if (nowAt) {
            var f = nowAt.offsetTop;
            var h = nowAt.offsetHeight;
            var h1 = obj.chatElem.clientHeight;
            var t = obj.chatElem.scrollTop;
            if (f > t && f + h < t + h1 && unreadParentObj.unreadOption.id.length) {
                // 发送已读消息
                unreadParentObj.unreadOption.id.forEach(function (el) {
                    var msg = { id: el, type: 1 };
                    'rid' in obj && (msg.rid = obj.user.id);
                    _this.sendMsg(msg);
                });
                this.clearUnreadMsg(obj);
            }
        }
        else {
            this.clearUnreadMsg(obj);
        }
    };
    // 清空消息
    ComService.prototype.clearUnreadMsg = function (obj) {
        console.log('clearUnreadMsg: ');
        // 清0消息
        var clearUnread = { unread: 0, id: [], chatID: '' };
        if ('rid' in obj) {
            obj.user.unreadOption = clearUnread;
            this.updateUnreadStorage(obj.user.id, clearUnread);
        }
        else {
            obj.unreadOption = clearUnread;
        }
    };
    // 获取用户列表
    ComService.prototype.getUserList = function (success) {
        var _this = this;
        this.http
            .get(this.api.userList)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserList')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, success);
        });
    };
    ComService.prototype.getUserInfo = function (id, cb) {
        var _this = this;
        this.http
            .get(this.api.userInfo + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserInfo')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, cb);
        });
    };
    ComService.prototype.login = function (data) {
        var _this = this;
        this.http
            .post(this.api.login, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('login')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, function () {
                _this.showAlert('登录成功');
                _this.isLogin = true;
                // 登录成功跳转客服页面
                setTimeout(function () {
                    _this.router.navigate(['/server']);
                }, 2000);
            });
        });
    };
    ComService.prototype.register = function (data) {
        var _this = this;
        this.http
            .post(this.api.register, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('register')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, function () {
                _this.showAlert('注册成功，马上跳转登录');
                setTimeout(function () {
                    _this.router.navigate(['/auth/login']);
                }, 2000);
            });
        });
    };
    ComService.prototype.logout = function () {
        var _this = this;
        this.http
            .post(this.api.logout, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('logout')))
            .subscribe(function (res) {
            _this.doHttpResponse(res, function () {
                _this.showAlert('登出成功!');
                setTimeout(function () {
                    _this.router.navigate(['/auth/login']);
                }, 2000);
            });
        });
    };
    ComService.prototype.getHistory = function (obj, id, success) {
        var _this = this;
        var options = {
            observe: 'response',
        };
        this.http
            .get(this.api.history + (id ? '?id=' + id : ''), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHistory')))
            .subscribe(function (res) {
            if (!obj.myID) {
                obj.myID = Number(res.headers.get('Uid'));
            }
            var ret = res.body;
            _this.doHttpResponse(ret, function (data) {
                _this.doHistory(data, obj);
                success(data);
            });
        });
    };
    ComService.prototype.attachSPT = function (obj, d, isServer) {
        var isIsend = d.fid === obj.myID;
        var isSysMsg = d.fid === 0;
        d.isServer = isSysMsg ? true : isServer ? isIsend : !isIsend;
        d.position = isServer ? (isSysMsg ? false : !isIsend) : !isIsend;
        var fromNowTime = this.timeFromNow(d.time / 1000000);
        d.timeStr = this.tmpTime === fromNowTime ? '' : fromNowTime;
        this.tmpTime !== fromNowTime && (this.tmpTime = fromNowTime);
        d.timeFormat = this.formatTime(d.time / 1000000, 'YYYY-MM-DD hh:mm:ss');
    };
    ComService.prototype.attachSPTWidthArr = function (data, obj, isServer) {
        var _this = this;
        data.forEach(function (d) {
            _this.attachSPT(obj, d, isServer);
        });
    };
    ComService.prototype.notifyInstanceEvent = function (content, title) {
        var instance = new Notification(title, {
            body: content,
            icon: '/assets/images/desk-logo.png',
            tag: '1212212',
            // sound:'/assets/sounds/msg.wav',
            renotify: true,
        });
        instance.onclick = function (e) {
            window.focus();
            instance.close();
            // 设置 当前用户的信息读取发送信息读取
        };
        instance.onerror = function () { };
        instance.onshow = function () {
            try {
                var msg = new Audio();
                msg.src = '/assets/sounds/msg.wav';
                msg.play();
            }
            catch (e) { }
        };
        instance.onclose = function () { };
    };
    ComService.prototype.deskNotify = function (title, msg) {
        var Notification = window.Notification;
        var div = document.createElement('div');
        div.innerHTML = msg;
        var content = '';
        Array.from(div.childNodes).forEach(function (el) {
            var nodeType = el.nodeType;
            if (nodeType === 1) {
                // 元素节点
                var id = el.id;
                if (id.substring(0, 3) === 'img') {
                    content += '[图片]';
                }
                else if (id.substring(0, 4) === 'file') {
                    content += '[文件]' + el.innerText;
                }
                else {
                    content += el.innerText;
                }
            }
            else if (nodeType === 3) {
                // 文本节点
                content += el.textContent;
            }
        });
        content = content.substring(0, 100) + (content.length > 100 ? '...' : '');
        if (Notification) {
            //支持桌面通知
            if (Notification.permission == 'granted') {
                //已经允许通知
                this.notifyInstanceEvent(content, title);
            }
            else {
                //第一次询问或已经禁止通知(如果用户之前已经禁止显示通知，那么浏览器不会再次询问用户的意见，Notification.requestPermission()方法无效)
                Notification.requestPermission(function (status) {
                    if (status === 'granted') {
                        this.notifyInstanceEvent(content, title);
                    }
                    else {
                        //用户禁止
                        return false;
                    }
                });
            }
        }
        else {
            //不支持(IE等)
            var index = 0;
            clearInterval(this.timer);
            this.timer = setInterval(function () {
                var titleElem = document.getElementsByName('title')[0];
                if (index % 2) {
                    titleElem.innerText = '【　　　】' + title; //这里是中文全角空格，其他不行
                }
                else {
                    titleElem.innerText = '【新消息】' + title;
                }
                index++;
                if (index > 20) {
                    clearInterval(this.timer);
                }
            }, 500);
        }
    };
    ComService.ɵfac = function ComService_Factory(t) { return new (t || ComService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    ComService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ComService, factory: ComService.ɵfac, providedIn: 'root' });
    return ComService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ComService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/to-safe.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/core/to-safe.pipe.ts ***!
  \**************************************/
/*! exports provided: ToSafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToSafePipe", function() { return ToSafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



var ToSafePipe = /** @class */ (function () {
    function ToSafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    // args={url,html,style,resourceUrl}
    ToSafePipe.prototype.transform = function (value, args) {
        args = args || 'url';
        return this._sanitizer['bypassSecurityTrust' + args[0].toUpperCase() + args.slice(1)](value);
    };
    ToSafePipe.ɵfac = function ToSafePipe_Factory(t) { return new (t || ToSafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
    ToSafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toSafe", type: ToSafePipe, pure: true });
    return ToSafePipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToSafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'toSafe'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/manage/manage.component.ts":
/*!********************************************!*\
  !*** ./src/app/manage/manage.component.ts ***!
  \********************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ManageComponent = /** @class */ (function () {
    function ManageComponent() {
        this.tabIndex = 0;
    }
    ManageComponent.prototype.ngOnInit = function () {
    };
    ManageComponent.prototype.changeTab = function (e) {
        console.dir(e.target);
        var i = Number(e.target.dataset.index);
        !isNaN(i) && (this.tabIndex = i);
    };
    ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(); };
    ManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageComponent, selectors: [["app-manage"]], decls: 194, vars: 12, consts: [[1, "container", "clearfix"], ["ondragstart", "return false", "id", "nameTitle", 1, "title", "bg-base", "noselect"], ["src", "assets/images/logo.png", 1, "vm"], [1, "fr", "name"], [1, "iconfont", "icon-true", "online"], [1, "state-txt"], ["id", "contentBox", 1, "content", "clearfix"], [1, "fl", "left", "ie-scroll", "other-scroll"], [1, "menu"], ["id", "menu", 1, "iconfont", "icon-menu"], ["id", "customers", 1, "customers", 3, "click"], ["data-index", "0"], ["data-index", "1"], ["data-index", "2"], ["id", "history", 1, "fr", "right", "pos-r"], [1, ""], [1, "vm"], ["id", "lisi", 1, "iconfont", "text-base", "icon-close", "vm-before", "fr", "mr-1", "csr"], [1, "history-content", "ie-scroll", "other-scroll"], ["id", "calendar", 1, "d-none", "pos-a", "calendar"], ["id", "schedule-box", 1, "boxshaw"], ["id", "rili", 1, "fixed-calendar", "boxshaw"], [1, "ml-1", "csr"], ["id", "kanRili", 1, "iconfont", "icon-calendar", "text-base", "vm"], ["id", "riliTxt", 1, "vm"], [1, "history-op", "fr", "mr-1"], ["title", "\u7B2C\u4E00\u9875", 1, "iconfont", "icon-left-stop", "bold"], ["title", "\u4E0A\u4E00\u9875", 1, "iconfont", "icon-less-than"], ["title", "\u4E0B\u4E00\u9875", 1, "iconfont", "icon-great-than"], ["title", "\u6700\u540E\u4E00\u9875", 1, "iconfont", "icon-right-stop", "bold"], ["id", "center", 1, "center"], [1, "customer-list", "ie-scroll", "other-scroll"], [1, "th-tag"], [1, "d-sm-none"], ["id", "tbContent"], [1, "icon", "new"], [1, "pos-r"], [1, "iconfont", "icon-search"], [1, "pos-a", "search-menu"], [1, "active"], ["id", "pagenation", 1, "page"], [1, "customer-list", "server-manage", "ie-scrollother-scroll"], [1, "name-online"], [1, "d-inline-block"], [1, "icon-container", "d-inline-block"], [1, "iconfont", "icon-server"], [1, "online-info", "fr"], [1, "circle"], [1, "dialog-info", "d-inline-block"], [1, "text-right"], [1, "fl", "mr-1"], [1, "dialog-txt"], ["data-id", "1", 1, "fr", "btn-dialog"], ["data-id", "2", 1, "fr", "btn-dialog"], ["data-id", "3", 1, "fr", "btn-dialog"], ["frameborder", "0", "src", "http://localhost:4200/server?frame=1", 2, "width", "100%", "height", "100%"], ["id", "alert", 1, "alert", "d-none"]], template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5728\u7EBF\u5BA2\u670D");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u7BA1\u7406\u545801");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u5728\u7EBF");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageComponent_Template_ul_click_15_listener($event) { return ctx.changeTab($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u5BA2\u6237\u7BA1\u7406");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u5BA2\u670D\u7BA1\u7406");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u804A\u5929\u7A97\u53E3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u6D88\u606F\u8BB0\u5F55");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2012-5-1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "th", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u8BBF\u5BA2\u59D3\u540D");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u8BBF\u95EE\u6B21\u6570");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u5730\u533A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u505C\u7559\u65F6\u95F4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u6700\u540E\u6D3B\u52A8");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "IP\u5730\u5740");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u5F53\u524D\u63A5\u5F85");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u64CD\u4F5C");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tbody", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u65B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u79E6\u67D0\u67D0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "03");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u6CB3\u5317\u7701");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "00:00:37");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "00:00:37");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "127.0.0.1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u5BA2\u670D01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u804A\u5929\u8BB0\u5F55");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u5386\u53F2\u8F68\u8FF9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u65B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u79E6\u67D0\u67D0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "03");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u6CB3\u5317\u7701");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "00:00:37");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "00:00:37");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "127.0.0.1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u5BA2\u670D01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "ul", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u6240\u6709\u5BA2\u670D");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u5BA2\u670D001");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u5728\u7EBF");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "\u5F53\u524D\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u4ECA\u65E5\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "15");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "\u5BF9\u8BDD\u8BB0\u5F55");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u5BA2\u670D001");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "\u5728\u7EBF");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\u5F53\u524D\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u4ECA\u65E5\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "15");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "button", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u5BF9\u8BDD\u8BB0\u5F55");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u5BA2\u670D001");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\u5728\u7EBF");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u5F53\u524D\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\u4ECA\u65E5\u5BF9\u8BDD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "15");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "button", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\u5BF9\u8BDD\u8BB0\u5F55");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "iframe", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "\u9519\u8BEF\u63D0\u793A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.tabIndex === 0 ? "active" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.tabIndex === 1 ? "active" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.tabIndex === 2 ? "active" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.tabIndex === 0 ? "" : "d-none");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.tabIndex === 1 ? "" : "d-none");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.tabIndex === 2 ? "" : "d-none");
        } }, styles: [".customers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n.customers[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{\r\n    background-color: #4585FF;\r\n    color:#FFF;\r\n}\r\n.menu[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    text-align: center;\r\n    padding:6px 0;\r\n    \r\n}\r\n.menu[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]{\r\n    font-size:1rem;\r\n}\r\n.center[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    background-color: #F4F9FF;\r\n    padding:10px 0;\r\n}\r\n.center[_ngcontent-%COMP%]   .th-tag[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding:0;\r\n    width:40px;\r\n}\r\n.center[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]{\r\n    font-size:1rem;\r\n}\r\n.search-menu[_ngcontent-%COMP%]{\r\n    right:0;\r\n    background-color: #fff;\r\n    border-radius:5px;\r\n    border:1px solid #D5E5FA;\r\n    box-shadow: 1px 2px  #D5E5FA;\r\n}\r\n.search-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding:10px 15px;\r\n}\r\n.search-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    background-color: #92B4F4;\r\n}\r\n.search-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n    background-color: #D5E5FA;\r\n}\r\n.customer-list[_ngcontent-%COMP%]{\r\n    overflow: auto;\r\n    width:100%;\r\n    height: 100%;\r\n}\r\n.server-manage[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    margin:0;\r\n    line-height: 33px;\r\n    margin-left:20px;\r\n    font-weight: 400;\r\n}\r\n.server-manage[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    padding:20px;\r\n}\r\n.server-manage[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{    \r\n    margin-right: 20px;\r\n    padding:10px;\r\n    border-radius: 4px;\r\n    border:1px solid #D5E5FA;\r\n    box-shadow: 2px 2px #D5E5FA ;\r\n    width: 250px;\r\n    margin-bottom: 15px;\r\n    display: inline-block;\r\n}\r\n.server-manage[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{\r\n    margin-right: 0;\r\n}\r\n.name-online[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\r\n.name-online[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{\r\n    padding:10px;\r\n    background-color: #F4F9FF;\r\n    border-radius: 50%;\r\n}\r\n.name-online[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%]{\r\n    color:#9DCCFF;\r\n    font-size:24px;   \r\n}\r\n.online-info[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n}\r\n.circle[_ngcontent-%COMP%]{\r\n    background-color: #2BDE73;\r\n    width:10px;\r\n    height:10px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n.dialog-info[_ngcontent-%COMP%]{\r\n    line-height: 2em;\r\n}\r\n.btn-dialog[_ngcontent-%COMP%]{\r\n    background-color: #92B4F4;\r\n    color:#fff;\r\n    padding:10px 15px;\r\n    border-radius: 4px;\r\n    border:none;\r\n    cursor: pointer;\r\n    font-size:16px;\r\n    margin-top: 15px;    \r\n}\r\n.dialog-txt[_ngcontent-%COMP%]{\r\n    color:#4585FF;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFHQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2UvbWFuYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tZXJzIGxpe1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jdXN0b21lcnMgbGkuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1ODVGRjtcclxuICAgIGNvbG9yOiNGRkY7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6NnB4IDA7XHJcbiAgICBcclxufVxyXG4ubWVudSAuaWNvbmZvbnR7XHJcbiAgICBmb250LXNpemU6MXJlbTtcclxufVxyXG4uY2VudGVyIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjlGRjtcclxuICAgIHBhZGRpbmc6MTBweCAwO1xyXG59XHJcbi5jZW50ZXIgLnRoLXRhZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIHdpZHRoOjQwcHg7XHJcbn1cclxuXHJcblxyXG4uY2VudGVyIC5pY29uZm9udHtcclxuICAgIGZvbnQtc2l6ZToxcmVtO1xyXG59XHJcblxyXG4uc2VhcmNoLW1lbnV7XHJcbiAgICByaWdodDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjRDVFNUZBO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAgI0Q1RTVGQTtcclxufVxyXG4uc2VhcmNoLW1lbnUgbGl7XHJcbiAgICBwYWRkaW5nOjEwcHggMTVweDtcclxufVxyXG5cclxuLnNlYXJjaC1tZW51IGxpLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJCNEY0O1xyXG59XHJcbi5zZWFyY2gtbWVudSBsaTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENUU1RkE7XHJcbn1cclxuLmN1c3RvbWVyLWxpc3R7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNlcnZlci1tYW5hZ2UgaDN7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnNlcnZlci1tYW5hZ2UgdWx7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbn1cclxuLnNlcnZlci1tYW5hZ2UgbGl7ICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjRDVFNUZBO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAjRDVFNUZBIDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnNlcnZlci1tYW5hZ2UgbGk6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4ubmFtZS1vbmxpbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubmFtZS1vbmxpbmUgLmljb24tY29udGFpbmVye1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjlGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4gXHJcbi5uYW1lLW9ubGluZSAuaWNvbmZvbnR7XHJcbiAgICBjb2xvcjojOURDQ0ZGO1xyXG4gICAgZm9udC1zaXplOjI0cHg7ICAgXHJcbn1cclxuLm9ubGluZS1pbmZve1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uY2lyY2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCREU3MztcclxuICAgIHdpZHRoOjEwcHg7XHJcbiAgICBoZWlnaHQ6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZGlhbG9nLWluZm97XHJcbiAgICBsaW5lLWhlaWdodDogMmVtO1xyXG59XHJcbi5idG4tZGlhbG9ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyQjRGNDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOjEwcHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyAgICBcclxufVxyXG4uZGlhbG9nLXR4dHtcclxuICAgIGNvbG9yOiM0NTg1RkY7XHJcbn0iXX0= */"] });
    return ManageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage',
                templateUrl: './manage.component.html',
                styleUrls: ['./manage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/server/server.component.ts":
/*!********************************************!*\
  !*** ./src/app/server/server.component.ts ***!
  \********************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_js_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/js/calendar */ "./src/assets/js/calendar.js");
/* harmony import */ var _assets_js_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_com_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/chat-content/chat-content.component */ "./src/app/shared/chat-content/chat-content.component.ts");
/* harmony import */ var _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/chat-unread/chat-unread.component */ "./src/app/shared/chat-unread/chat-unread.component.ts");
/* harmony import */ var _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/edit-operate/edit-operate.component */ "./src/app/shared/edit-operate/edit-operate.component.ts");
/* harmony import */ var _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/send-area/send-area.component */ "./src/app/shared/send-area/send-area.component.ts");










function ServerComponent_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 48);
} }
function ServerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u5728\u7EBF\u5BA2\u670D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ServerComponent_div_1_span_5_Template, 1, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_div_1_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.showStateMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u5728\u7EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u5728\u7EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_div_1_Template_li_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u767B\u51FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.reconnect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u5BA2\u670D", ctx_r0.myID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.stateMenuShow ? "show" : "");
} }
function ServerComponent_tr_8_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r12.unreadOption == null ? null : u_r12.unreadOption.unread);
} }
function ServerComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_tr_8_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var i_r13 = ctx.index; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeUser(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServerComponent_tr_8_span_8_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var u_r12 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.user.id === u_r12.id ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](u_r12.state ? "new" : "old");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", (u_r12.state ? "\u5728" : "\u79BB") + "\u7EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r12.state ? "\u5728" : "\u79BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r12.name || "\u6E38\u5BA2" + u_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r12.mall || "\u672A\u77E5\u6765\u6E90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", u_r12.unreadOption == null ? null : u_r12.unreadOption.unread);
} }
function ServerComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6CA1\u6709\u5BA2\u6237\u8BBF\u95EE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_div_16_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.clickImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var h_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](h_r18.isServer ? "online" : "text-base");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r18.isServer ? "\u5BA2\u670D" + h_r18.fid : h_r18.name || "\u6E38\u5BA2" + h_r18.fid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r18.timeFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", h_r18.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ServerComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6CA1\u6709\u5386\u53F2\u8BB0\u5F55");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServerComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.getSpecialHistory(ctx_r21.historyDate); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u786E\u5B9A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServerComponent_div_29_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.user.email);
} }
function ServerComponent_div_29_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.user.ip);
} }
function ServerComponent_div_29_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u8BBF\u95EE\u9875\u9762\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.user.domain);
} }
function ServerComponent_div_29_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6765\u6E90:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r26.user.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.user.mall);
} }
function ServerComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ServerComponent_div_29_li_6_Template, 4, 1, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServerComponent_div_29_li_7_Template, 4, 1, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServerComponent_div_29_li_8_Template, 5, 1, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServerComponent_div_29_li_9_Template, 5, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r6.user.name || "\u6E38\u5BA2" + ctx_r6.user.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.user.mall);
} }
function ServerComponent_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u5360\u4F4D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "/server#" + (ctx_r7.user == null ? null : ctx_r7.user.unreadOption == null ? null : ctx_r7.user.unreadOption.chatID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c0 = function (a0) { return { height: a0 }; };
var _c1 = function (a0) { return { "margin-top": a0 }; };
var ServerComponent = /** @class */ (function () {
    function ServerComponent(com, route) {
        this.com = com;
        this.route = route;
        this.chatList = [];
        this.rid = 0;
        // 用户列表
        this.userList = [];
        this.rightShow = '';
        this.stateMenuShow = false;
        this.allHistory = [];
        this.rightHistory = [];
        // 文件列表
        this.files = [];
        // 当前添加的文件/图片
        // 是否显示用户列表
        this.isShowUserList = false;
        // 历史记录日历显示
        this.historyDate = '';
        // isFrame 不显示标题行
        this.isFrame = false;
        // 是否显示月日历
        this.isShowMonthCalendar = false;
        this.historyLen = 0;
        this.reconnect = false;
        this.keepEnd = false;
        this.imgSrc = '';
    }
    ServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.historyDate = this.com.formatTime('', 'YYYY-MM-DD');
        this.initCalendar();
        var fram = window.location.search.indexOf('frame=1') > -1 && (this.isFrame = true);
        console.log('fram: ', window.location.search, fram);
        this.chatElem = document.getElementById('chat');
        this.com.getUserList(function (data) {
            console.log('com.getUserList data: ', data);
            if (data && data.length) {
                // 设置未读数量
                var storage_1 = window.localStorage.unread;
                try {
                    storage_1 = JSON.parse(storage_1) || {};
                }
                catch (e) {
                    storage_1 = {};
                }
                data.forEach(function (d) {
                    // 5s不回应默认已掉线
                    storage_1[d.id] && (d.unreadOption = storage_1[d.id]);
                    d.state = Date.now() - d.note_at / 1000000 < 5000;
                });
                _this.userList = data;
                _this.changeUser(0);
            }
        });
        // 开启轮询
        var random = Date.now().toString();
        this.com.pollingStart(this, random, 'role=1');
    };
    ServerComponent.prototype.clickImg = function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            this.com.previewOption.isShowMask = true;
            this.com.previewOption.src = e.target.src;
        }
    };
    ServerComponent.prototype.initCalendar = function () {
        var _this = this;
        var callback = function (y, m, d) {
            _this.historyDate = _this.com.formatTime(y + '-' + m + '-' + d, 'YYYY-MM-DD');
        };
        new _assets_js_calendar__WEBPACK_IMPORTED_MODULE_1__({
            el: '#schedule-box',
            clickCb: callback,
            nextMonthCb: callback,
            nextYeayCb: callback,
            prevMonthCb: callback,
            prevYearCb: callback,
        });
    };
    ServerComponent.prototype.fileEmiter = function (e) {
        this.keepEnd = !this.keepEnd;
    };
    // 历史记录按日期分离
    ServerComponent.prototype.getSpecialHistory = function (date) {
        if (this.allHistory.length) {
            this.rightHistory = this.allHistory.filter(function (el) {
                return el.timeFormat.indexOf(date) > -1;
            });
            this.isShowMonthCalendar = false;
        }
    };
    ServerComponent.prototype.showUserList = function () {
        this.isShowUserList = !this.isShowUserList;
    };
    // 左侧切换用户
    ServerComponent.prototype.changeUser = function (i) {
        this.user = this.userList[i];
        this.getHistory();
    };
    ServerComponent.prototype.getHistory = function () {
        var _this = this;
        this.com.getHistory(this, this.user.id, function (data) {
            // this.chatList = data || [];
            if (_this.rightShow) {
                _this.rightHistory = data;
                _this.allHistory = data;
            }
        });
    };
    ServerComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        // 给在线用户发
        this.userList.forEach(function (el) {
            el.state && _this.com.sendMsg({ type: 2, data: 'offline', rid: el.id });
        });
    };
    ServerComponent.prototype.logout = function () {
        // 登出
        this.com.logout();
        this.com.isLogin = false;
    };
    ServerComponent.prototype.catchTab = function (e, callback) {
        callback && callback();
        e.stopPropagation();
    };
    ServerComponent.prototype.showStateMenu = function () {
        this.stateMenuShow = true;
    };
    ServerComponent.prototype.hideShowing = function () {
        this.stateMenuShow = false;
        this.isShowUserList = false;
        this.isShowMonthCalendar = false;
    };
    ServerComponent.prototype.rightHitoryShow = function (toggle) {
        var _this = this;
        if (!toggle) {
            this.com.getHistory(this, this.user.id, function (data) {
                // 显示右侧信息
                _this.rightShow = 'right-show';
                _this.rightHistory = data;
                _this.allHistory = data;
            });
        }
        else {
            this.closeHistory();
        }
    };
    ServerComponent.prototype.closeHistory = function () {
        this.rightHistory = [];
        this.rightShow = '';
    };
    ServerComponent.prototype.showMonthCalendar = function () {
        this.isShowMonthCalendar = !this.isShowMonthCalendar;
    };
    ServerComponent.prototype.chooseDateConfirm = function () {
        this.getSpecialHistory(this.historyDate);
    };
    ServerComponent.ɵfac = function ServerComponent_Factory(t) { return new (t || ServerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_com_service__WEBPACK_IMPORTED_MODULE_2__["ComService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
    ServerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerComponent, selectors: [["app-server"]], decls: 40, vars: 32, consts: [[1, "container", "clearfix"], ["class", "title bg-base noselect pos-r", "ondragstart", "return false", "id", "nameTitle", 4, "ngIf"], [1, "content", "clearfix"], [1, "fl", "left", "ie-scroll", "other-scroll", "text-center"], [1, "menu", 3, "click"], ["id", "menu", 1, "iconfont", "icon-menu"], ["id", "customers", 1, "customers", "w-100", "h-100", "ie-scroll", "other-scroll"], [1, "user-list"], [3, "class", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "history", 1, "fr", "right"], [1, ""], [1, "vm"], ["id", "lisi", 1, "iconfont", "text-base", "icon-close", "vm-before", "fr", "mr-1", "csr", 3, "click"], [1, "history-content", "ie-scroll", "other-scroll"], ["class", "dialog-r", 3, "click", 4, "ngFor", "ngForOf"], ["class", "dialog-r", 4, "ngIf"], [1, "pos-r"], [1, "pos-a", "calendar"], ["id", "schedule-box", 1, "boxshaw"], ["id", "rili", 1, "fixed-calendar", "boxshaw"], [1, "ml-1", "csr", 3, "click"], ["id", "kanRili", 1, "iconfont", "icon-calendar", "text-base", "vm"], ["id", "riliTxt", 1, "vm"], ["class", "confirm-btn fr", 3, "click", 4, "ngIf"], ["id", "center", 1, "center", "pos-r"], ["class", "user-info pos-a", 4, "ngIf"], ["id", "chat", 1, "chat", "pos-r", "ie-scroll", "other-scroll"], [1, "chat-details"], [3, "chatList"], [3, "who", "unread"], ["id", "linkToChatID", 3, "href", 4, "ngIf"], ["id", "edit", 1, "edit-area"], [3, "who", "toggle", "historyEmiter", "fileEmiter"], [3, "who", "keepEnd"], ["id", "alert", 1, "alert", "d-none"], ["ondragstart", "return false", "id", "nameTitle", 1, "title", "bg-base", "noselect", "pos-r"], ["src", "assets/images/logo.png", 1, "vm"], [1, "fr", "name"], ["class", "mr-1 blink text-red", 4, "ngIf"], [1, "mr-1"], [1, "d-inline-block", 3, "click"], [1, "iconfont", "icon-true", "online"], [1, "state-txt"], [1, "iconfont", "icon-dropdown"], [1, "state-menu", "pos-a"], [1, "active"], [3, "click"], [1, "mr-1", "blink", "text-red"], [1, "icon", 3, "title"], ["class", "unread-label pos-a", 4, "ngIf"], [1, "unread-label", "pos-a"], ["colspan", "3"], [1, "dialog-r", 3, "click"], [1, "ml-1"], [1, "ml-1", 3, "innerHTML"], [1, "dialog-r"], [1, "confirm-btn", "fr", 3, "click"], [1, "user-info", "pos-a"], [1, "box"], [1, "item"], ["id", "userIcon", 1, "ml-1", "iconfont", "icon-user", "text-lighter-base", "vm"], ["id", "userName"], ["class", "item", 4, "ngIf"], ["class", "d-480-none item", 4, "ngIf"], ["class", "d-768-none item", 4, "ngIf"], [1, "d-480-none", "item"], [1, "d-768-none", "item"], [1, "mr-1", 3, "title"], ["id", "linkToChatID", 3, "href"]], template: function ServerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServerComponent_div_1_Template, 18, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_div_click_4_listener() { return ctx.showUserList(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServerComponent_tr_8_Template, 9, 9, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServerComponent_tr_9_Template, 3, 0, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u6D88\u606F\u8BB0\u5F55");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_i_click_14_listener() { return ctx.closeHistory(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ServerComponent_div_16_Template, 7, 5, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ServerComponent_div_17_Template, 2, 0, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_span_click_23_listener() { return ctx.showMonthCalendar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ServerComponent_button_27_Template, 2, 0, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ServerComponent_div_29_Template, 10, 5, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "chat-content", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "chat-unread", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ServerComponent_a_34_Template, 2, 1, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "edit-operate", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("historyEmiter", function ServerComponent_Template_edit_operate_historyEmiter_36_listener($event) { return ctx.rightHitoryShow($event); })("fileEmiter", function ServerComponent_Template_edit_operate_fileEmiter_36_listener($event) { return ctx.fileEmiter($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "send-area", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u9519\u8BEF\u63D0\u793A");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFrame);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.isFrame ? "100%" : "calc(100% - 53px)"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.rightShow);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isShowUserList ? "pos-r" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isShowUserList ? "show-list" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userList.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rightHistory);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.rightHistory.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isShowMonthCalendar ? "" : "d-none");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.historyDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowMonthCalendar);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, (ctx.user ? 42 : 0) + "px"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatList", ctx.chatList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx)("unread", ctx.user == null ? null : ctx.user.unread);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.unreadOption == null ? null : ctx.user.unreadOption.chatID);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx)("toggle", !!ctx.rightShow);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx)("keepEnd", ctx.keepEnd);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_5__["ChatContentComponent"], _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_6__["ChatUnreadComponent"], _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_7__["EditOperateComponent"], _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_8__["SendAreaComponent"]], styles: [".icon-dropdown[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n.state-menu[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  border: 1px solid #d5e5fa;\r\n  top: 100%;\r\n  color: #36404a;\r\n  border-radius: 5px;\r\n  box-shadow: 2px 2px #d5e5fa;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  background-color: #fff;\r\n  overflow: hidden;\r\n  transition: all 2s;\r\n  opacity: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.state-menu.show[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  z-index: 6;\r\n}\r\n\r\n.state-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 5px 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.state-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n  background-color: #92b4f4;\r\n}\r\n\r\n.right-show[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #ecf0f1;\r\n  z-index: 5;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 5px 0;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   .attach-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  padding: 4px 0;\r\n  \r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n  white-space: nowrap;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\r\n  width: 100%;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  text-align: center;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  color: #4585ff;\r\n}\r\n\r\n.icon-calendar[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n  width: 5rem;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n.customers.show-list[_ngcontent-%COMP%] {\r\n  display: block;\r\n  left: 100%;\r\n  z-index: 9;\r\n  width: 12rem;\r\n  top: 0;\r\n  border-right: 1px solid #ddd;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  box-shadow: 0px 1px 0.5rem #d5e5fa;\r\n  position: absolute;\r\n}\r\n\r\ntr.active[_ngcontent-%COMP%] {\r\n  background-color: #f9ce00;\r\n}\r\n\r\n.show-list[_ngcontent-%COMP%]   .pos-list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffcd06;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > .pos-user[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  left: 0;\r\n  top: 100%;\r\n  box-sizing: border-box;\r\n  box-shadow: 1px 0px 0.5rem #d5e5fa;\r\n  z-index: 33;\r\n  background: white;\r\n}\r\n\r\n\r\n\r\n.right-show[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.customers[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.confirm-btn[_ngcontent-%COMP%] {\r\n  background-color: #d5e5fa;\r\n  border: none;\r\n  padding: 5px 20px;\r\n  margin-top: 12px;\r\n  border-radius: 30px;\r\n  box-shadow: 1px 1px #4585ff;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-list[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.unread-label[_ngcontent-%COMP%] {\r\n  right: 5px;\r\n  font-size: 12px;\r\n  top: 8px;\r\n  border-radius: 4px;\r\n  padding: 2px;\r\n  color: #fff;\r\n  background-color: #f00;\r\n  min-width: 20px;\r\n  border-radius: 20px;;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1200.1px) and (min-width: 1024.1px) {\r\n  .right-show[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n  }\r\n\r\n  .right-show[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1024.1px) and (min-width: 768.1px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n  }\r\n  .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .sm-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768.1px) and (min-width: 480.1px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n  }\r\n  .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .user-info[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n  .user-info[_ngcontent-%COMP%]   .sm-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n    width: auto;\r\n    border-left: 0;\r\n    float: none;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480.1px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    margin-left: 2rem;\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    display: block;\r\n  }\r\n  .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .user-info[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n  .user-info[_ngcontent-%COMP%]   .sm-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .right-show[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .right-show[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsU0FBUztFQUNULGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHNCQUFtQjtNQUFuQixtQkFBbUI7RUFDbkIsc0JBQThCO01BQTlCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osTUFBTTtFQUNOLDRCQUE0QjtFQUM1QixvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixPQUFPO0VBQ1AsU0FBUztFQUNULHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFDQSxVQUFVOztBQUNWO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFDQSw2QkFBNkI7O0FBQzdCO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUNBLGtCQUFrQjs7QUFDbEI7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7RUFDYjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7RUFDQTs7SUFFRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZlci9zZXJ2ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWRyb3Bkb3duIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5zdGF0ZS1tZW51IHtcclxuICByaWdodDogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDVlNWZhO1xyXG4gIHRvcDogMTAwJTtcclxuICBjb2xvcjogIzM2NDA0YTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjZDVlNWZhO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMnM7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4uc3RhdGUtbWVudS5zaG93IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDY7XHJcbn1cclxuLnN0YXRlLW1lbnUgbGkge1xyXG4gIHBhZGRpbmc6IDVweCAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3RhdGUtbWVudSBsaS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmI0ZjQ7XHJcbn1cclxuLnJpZ2h0LXNob3cgLnVzZXItaW5mbyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi51c2VyLWluZm8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG4udXNlci1pbmZvIHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnVzZXItaW5mbyBsaSB7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuLnVzZXItaW5mbyAuYXR0YWNoLWluZm8gc3BhbiB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICAvKiBmb250LXNpemU6MC43NXJlbTsgKi9cclxufVxyXG4udXNlci1pbmZvID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi51c2VyLWluZm8gPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51c2VyLWluZm8gPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnVzZXItaW5mbyA+IGRpdjpsYXN0LWNoaWxkID4gZGl2ID4gc3BhbiB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnVzZXItaW5mbyBiIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGNvbG9yOiAjNDU4NWZmO1xyXG59XHJcblxyXG4uaWNvbi1jYWxlbmRhciB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICB3aWR0aDogNXJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tZW51IC5pY29uZm9udCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbi5jdXN0b21lcnMuc2hvdy1saXN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgd2lkdGg6IDEycmVtO1xyXG4gIHRvcDogMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDAuNXJlbSAjZDVlNWZhO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxudHIuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjljZTAwO1xyXG59XHJcbi5zaG93LWxpc3QgLnBvcy1saXN0IHRhYmxlIHRyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZDA2O1xyXG59XHJcbi51c2VyLWluZm8gPiAucG9zLXVzZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAxcHggMHB4IDAuNXJlbSAjZDVlNWZhO1xyXG4gIHotaW5kZXg6IDMzO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi8q5Y+z5L6n5pi+56S65pe25Y+Y5pu0Ki9cclxuLnJpZ2h0LXNob3cgLnJpZ2h0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY3VzdG9tZXJzIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNvbmZpcm0tYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVlNWZhO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAjNDU4NWZmO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51c2VyLWxpc3Qge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udW5yZWFkLWxhYmVsIHtcclxuICByaWdodDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0b3A6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDA7XHJcbiAgbWluLXdpZHRoOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7O1xyXG59XHJcbi8qICAgMTAyNC4xIH4gMTIwMC4xICAgMTIwMCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwLjFweCkgYW5kIChtaW4td2lkdGg6IDEwMjQuMXB4KSB7XHJcbiAgLnJpZ2h0LXNob3cgLmxlZnQge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgfVxyXG4gIC5yaWdodC1zaG93IC5jZW50ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbiAgfVxyXG5cclxuICAucmlnaHQtc2hvdyAuY3VzdG9tZXJzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5yaWdodC1zaG93IC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4vKiA3NjguMSAgLSAxMDI0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjQuMXB4KSBhbmQgKG1pbi13aWR0aDogNzY4LjFweCkge1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gIH1cclxuICAuY3VzdG9tZXJzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAucmlnaHQtc2hvdyAuc20taGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjguMXB4KSBhbmQgKG1pbi13aWR0aDogNDgwLjFweCkge1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gIH1cclxuICAuY3VzdG9tZXJzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudXNlci1pbmZvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnVzZXItaW5mbyAuc20taGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAucmlnaHQtc2hvdyAucmlnaHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5yaWdodC1zaG93IC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MC4xcHgpIHtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICB9XHJcbiAgLm1lbnUge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmN1c3RvbWVycyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudXNlci1pbmZvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnVzZXItaW5mbyAuc20taGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXNob3cgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucmlnaHQtc2hvdyAubGVmdCxcclxuICAucmlnaHQtc2hvdyAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
    return ServerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server',
                templateUrl: './server.component.html',
                styleUrls: ['./server.component.css'],
            }]
    }], function () { return [{ type: _core_com_service__WEBPACK_IMPORTED_MODULE_2__["ComService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/chat-content/chat-content.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/chat-content/chat-content.component.ts ***!
  \***************************************************************/
/*! exports provided: ChatContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContentComponent", function() { return ChatContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/to-safe.pipe */ "./src/app/core/to-safe.pipe.ts");





function ChatContentComponent_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.timeStr);
} }
function ChatContentComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatContentComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", c_r1.readed ? "\u5BF9\u65B9\u5DF2\u8BFB" : "\u5BF9\u65B9\u672A\u8BFB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.readed ? "readed" : "unread");
} }
function ChatContentComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.isServer ? "icon-server" : "icon-user");
} }
function ChatContentComponent_div_0_span_7_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", c_r1.webSrc || c_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatContentComponent_div_0_span_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("icon-" + c_r1.fileType);
} }
function ChatContentComponent_div_0_span_7_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", c_r1.webSrc || "javascript:;", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.name);
} }
function ChatContentComponent_div_0_span_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u4E0A\u4F20\u4E2D\uFF1A", c_r1.uploadProgress, "% ");
} }
function ChatContentComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatContentComponent_div_0_span_7_img_1_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatContentComponent_div_0_span_7_i_2_Template, 1, 2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatContentComponent_div_0_span_7_a_3_Template, 2, 2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatContentComponent_div_0_span_7_span_4_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.position ? "chat-content-txt text-left client-content" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.msgType === "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.msgType === "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.msgType === "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.uploadProgress > 0 && c_r1.uploadProgress < 100);
} }
function ChatContentComponent_div_0_span_8_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatContentComponent_div_0_span_8_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.clickImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "toSafe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, c_r1.data, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ChatContentComponent_div_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
} if (rf & 2) {
    var c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.isServer ? "icon-server" : "icon-user");
} }
function ChatContentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatContentComponent_div_0_p_1_Template, 2, 1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatContentComponent_div_0_span_3_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatContentComponent_div_0_span_4_Template, 2, 3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatContentComponent_div_0_span_5_Template, 1, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatContentComponent_div_0_span_7_Template, 5, 6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatContentComponent_div_0_span_8_Template, 2, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatContentComponent_div_0_span_9_Template, 1, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "chatList" + c_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.timeStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.position ? "" : "text-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !c_r1.position && c_r1.isUploaded === 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !c_r1.position && c_r1.isUploaded !== 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.position ? "tleft" : "tright  mr-1 text-left");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !c_r1.msgType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !c_r1.position);
} }
var ChatContentComponent = /** @class */ (function () {
    function ChatContentComponent(com) {
        this.com = com;
    }
    ChatContentComponent.prototype.ngOnInit = function () {
    };
    ChatContentComponent.prototype.clickImg = function (e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            // 图片点击要放大图片
            this.com.previewOption.src = e.target.src;
            this.com.previewOption.isShowMask = true;
        }
    };
    ChatContentComponent.ɵfac = function ChatContentComponent_Factory(t) { return new (t || ChatContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"])); };
    ChatContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatContentComponent, selectors: [["chat-content"]], inputs: { chatList: "chatList" }, decls: 1, vars: 1, consts: [[3, "id", 4, "ngFor", "ngForOf"], [3, "id"], ["class", "time", 4, "ngIf"], [1, "dialog"], ["class", "uploaded error mr-10", "title", "\u53D1\u9001\u5931\u8D25!", 4, "ngIf"], ["class", "uploaded success mr-10", 3, "title", 4, "ngIf"], ["class", "iconfont text-lighter-base vb-before mr-1", 3, "class", 4, "ngIf"], [1, "chat-content", "bg-light-base", "pos-r"], [3, "class", 4, "ngIf"], ["class", "chat-content-txt text-left client-content ", 3, "innerHTML", "click", 4, "ngIf"], ["class", "iconfont text-lighter-base vb-before ", 3, "class", 4, "ngIf"], [1, "time"], ["title", "\u53D1\u9001\u5931\u8D25!", 1, "uploaded", "error", "mr-10"], [1, "iconfont", "icon-error"], [1, "uploaded", "success", "mr-10", 3, "title"], [1, "read-circle"], [1, "iconfont", "text-lighter-base", "vb-before", "mr-1"], [3, "src", 4, "ngIf"], ["class", "iconfont ", 3, "class", 4, "ngIf"], ["class", "file-name", 3, "href", 4, "ngIf"], [4, "ngIf"], [3, "src"], [1, "iconfont"], [1, "file-name", 3, "href"], [1, "chat-content-txt", "text-left", "client-content", 3, "innerHTML", "click"], [1, "iconfont", "text-lighter-base", "vb-before"]], template: function ChatContentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatContentComponent_div_0_Template, 10, 12, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatList);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["ToSafePipe"]], styles: [".uploaded[_ngcontent-%COMP%]{\r\n    font-size: 12px;    \r\n}\r\n.ml-10[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n.mr-10[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n}\r\n.success[_ngcontent-%COMP%]{\r\n    color: green;\r\n    vertical-align: top;\r\n}\r\n.error[_ngcontent-%COMP%]{\r\n    color:red;\r\n    vertical-align: top;\r\n}\r\n.read-circle[_ngcontent-%COMP%]{\r\n    border-radius:50%;\r\n    \r\n    display:inline-block;\r\n    width:12px;\r\n    height:12px;\r\n    vertical-align: top;\r\n}\r\n.unread[_ngcontent-%COMP%]{\r\n    background-color: #d7d2d2;\r\n}\r\n.readed[_ngcontent-%COMP%]{\r\n    background-color: rgb(0, 255, 55);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYXQtY29udGVudC9jaGF0LWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7O0lBRWpCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2hhdC1jb250ZW50L2NoYXQtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZGVke1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyAgICBcclxufVxyXG4ubWwtMTB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ubXItMTB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnN1Y2Nlc3N7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5lcnJvcntcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLnJlYWQtY2lyY2xle1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6MTJweDtcclxuICAgIGhlaWdodDoxMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4udW5yZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDJkMjtcclxufVxyXG4ucmVhZGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgNTUpO1xyXG59Il19 */"] });
    return ChatContentComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chat-content',
                templateUrl: './chat-content.component.html',
                styleUrls: ['./chat-content.component.css']
            }]
    }], function () { return [{ type: src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }]; }, { chatList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/chat-unread/chat-unread.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/chat-unread/chat-unread.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatUnreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUnreadComponent", function() { return ChatUnreadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ChatUnreadComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatUnreadComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toUnread(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u672A\u8BFB", ctx_r0.unread, "");
} }
var ChatUnreadComponent = /** @class */ (function () {
    function ChatUnreadComponent(com) {
        this.com = com;
    }
    ChatUnreadComponent.prototype.ngOnInit = function () {
    };
    ChatUnreadComponent.prototype.toUnread = function () {
        this.com.jumpToUnread(this.who);
        // this.who.toBottom();
    };
    ChatUnreadComponent.ɵfac = function ChatUnreadComponent_Factory(t) { return new (t || ChatUnreadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"])); };
    ChatUnreadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatUnreadComponent, selectors: [["chat-unread"]], inputs: { who: "who", unread: "unread" }, decls: 1, vars: 1, consts: [["class", "chat-unread pos-a", 3, "click", 4, "ngIf"], [1, "chat-unread", "pos-a", 3, "click"]], template: function ChatUnreadComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatUnreadComponent_div_0_Template, 2, 1, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unread);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".chat-unread[_ngcontent-%COMP%]{\r\n    background: rgba(0,0,0,.8);\r\n    font-size: 12px;\r\n    color: #fff;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    bottom: 43%;\r\n    right: 10px;\r\n    cursor:pointer\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYXQtdW5yZWFkL2NoYXQtdW5yZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1g7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jaGF0LXVucmVhZC9jaGF0LXVucmVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtdW5yZWFke1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm90dG9tOiA0MyU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGN1cnNvcjpwb2ludGVyXHJcbn0iXX0= */"] });
    return ChatUnreadComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatUnreadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chat-unread',
                templateUrl: './chat-unread.component.html',
                styleUrls: ['./chat-unread.component.css']
            }]
    }], function () { return [{ type: src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }]; }, { who: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unread: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/edit-operate/edit-operate.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/edit-operate/edit-operate.component.ts ***!
  \***************************************************************/
/*! exports provided: EditOperateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOperateComponent", function() { return EditOperateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/com.service */ "./src/app/core/com.service.ts");



var EditOperateComponent = /** @class */ (function () {
    function EditOperateComponent(com) {
        this.com = com;
        this.fileEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.historyEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isServer = false;
        this.toggle = false;
        this.isLogin = false;
    }
    EditOperateComponent.prototype.ngOnInit = function () {
        this.isServer = 'rid' in this.who;
    };
    EditOperateComponent.prototype.getFile = function (e) {
        var _this = this;
        //  允许的文件类型
        // .doc application/msword
        // .docx application/vnd.openxmlformats-officedocument.wordprocessingml.document
        // .xls application/vnd.ms-excel
        // .xlsx  application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
        // .ppt application/vnd.ms-powerpoint
        // .pptx application/vnd.openxmlformats-officedocument.presentationml.presentation
        // .pdf application/pdf
        // .zip application/zip, application/octet-stream, application/x-zip-compressed, multipart/x-zip
        // .rar application/x-rar-compressed, application/octet-stream
        // .gz application/x-gzip
        // .txt 'text/plain'
        var permitType = [
            'application/zip',
            'application/octet-stream',
            'application/x-zip-compressed',
            'multipart/x-zip',
            'application/x-rar-compressed',
            'application/x-gzip',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-powerpoint',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'application/pdf',
            'text/plain',
        ];
        var file = e.target.files[0];
        if (file.type.indexOf('image') > -1) {
            // 是图片
            this.com.preview(file, function (src) {
                var obj = { type: 'img', fid: 'img' + Date.now(), src: src, file: file };
                _this.who.files.push(obj);
                console.log('图片入栈： ', _this.who.files);
                _this.fileEmiter.emit(true);
            });
        }
        else if (permitType.indexOf(file.type) > -1) {
            // 是文件
            var i = permitType.indexOf(file.type);
            var type = i < 5
                ? 'zip'
                : i < 8
                    ? 'doc'
                    : i < 10
                        ? 'xls'
                        : i < 12
                            ? 'ppt'
                            : i === 12
                                ? 'pdf'
                                : 'txt';
            var obj = {
                type: 'file',
                fileType: type,
                file: file,
                name: file.name,
                fid: 'file' + Date.now(),
            };
            this.who.files.push(obj);
            console.log('文件入栈： ', this.who.files);
            this.fileEmiter.emit(true);
        }
        else {
            this.com.showAlert('不支持此图片/文件格式');
        }
        e.target.value = '';
    };
    EditOperateComponent.prototype.getHistory = function () {
        // 显示右侧 然后把历史记录放到右侧去
        if (this.isServer && !this.who.userList.length)
            return;
        this.historyEmiter.emit(this.toggle);
    };
    EditOperateComponent.ɵfac = function EditOperateComponent_Factory(t) { return new (t || EditOperateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"])); };
    EditOperateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditOperateComponent, selectors: [["edit-operate"]], inputs: { who: "who", toggle: "toggle" }, outputs: { fileEmiter: "fileEmiter", historyEmiter: "historyEmiter" }, decls: 6, vars: 3, consts: [[1, "op", "pos-r"], [1, "pos-r"], [1, "iconfont", "icon-photo", "vm", "ml-1", "csr"], ["type", "file", "title", "\u4E0A\u4F20\u56FE\u7247/\u6587\u4EF6", 1, "pos-a", "file", "csr", 3, "disabled", "change"], [1, "pos-a", "history-clock", 3, "click"], ["id", "historyIcon", 1, "iconfont", "icon-clock", "mr-1", "csr"]], template: function EditOperateComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditOperateComponent_Template_input_change_3_listener($event) { return ctx.getFile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditOperateComponent_Template_span_click_4_listener() { return ctx.getHistory(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isServer && !ctx.who.userList.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.isServer ? "" : "d-none");
        } }, styles: [".history-clock[_ngcontent-%COMP%]{\r\n    right:0;\r\n    top:0;\r\n}\r\n\r\n.file[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    z-index:3;\r\n}\r\n\r\n.cursor[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2VkaXQtb3BlcmF0ZS9lZGl0LW9wZXJhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87SUFDUCxLQUFLO0FBQ1Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lZGl0LW9wZXJhdGUvZWRpdC1vcGVyYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlzdG9yeS1jbG9ja3tcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB0b3A6MDtcclxufVxyXG5cclxuLmZpbGV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB6LWluZGV4OjM7XHJcbn1cclxuLmN1cnNvcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
    return EditOperateComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditOperateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'edit-operate',
                templateUrl: './edit-operate.component.html',
                styleUrls: ['./edit-operate.component.css'],
            }]
    }], function () { return [{ type: src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }]; }, { fileEmiter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], historyEmiter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], who: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/send-area/send-area.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/send-area/send-area.component.ts ***!
  \*********************************************************/
/*! exports provided: SendAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendAreaComponent", function() { return SendAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/com.service */ "./src/app/core/com.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




var SendAreaComponent = /** @class */ (function () {
    function SendAreaComponent(com, _sanitizer) {
        this.com = com;
        this._sanitizer = _sanitizer;
        // @Output() sendListen = new EventEmitter();
        this.keepEnd = false;
        this.isServer = false;
        this.target = null;
        this.hasHolder = true;
        this.editText = '';
        // 文件显示的angular循环注释节点
        this.fileCommentNode = null;
    }
    SendAreaComponent.prototype.ngOnInit = function () {
        this.target = document.getElementById('editDiv');
        this.isServer = 'rid' in this.who;
        this.setEditDivUsable();
    };
    SendAreaComponent.prototype.ngOnChanges = function (changes) {
        // 有新文件加入
        this.newFileNode(this.who.files[this.who.files.length - 1]);
    };
    SendAreaComponent.prototype.newFileNode = function (file) {
        if (file) {
            var span = document.createElement('span');
            span.id = file.fid;
            span.contentEditable = false;
            span.className = 'd-inline-block';
            file.type === 'file' && (span.className += ' file-box');
            if (file.type === 'img') {
                var img = document.createElement('img');
                img.src = file.src;
                img.onerror = "this.src='/assets/images/error.jpg'";
                span.appendChild(img);
            }
            else {
                var icon = document.createElement('i');
                icon.className = 'iconfont icon-' + file.fileType;
                span.appendChild(icon);
                var link = document.createElement('a');
                link.href = file.src;
                link.textContent = file.name;
                link.className = 'file-name';
                span.appendChild(link);
            }
            this.target.appendChild(span);
            this.keepLastIndex(this.target);
        }
    };
    SendAreaComponent.prototype.setBorder = function (d, e) {
        d.border = !d.border;
        var range = document.createRange();
        range.selectNodeContents(e.target); // document.getElementById('test')
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        this.editFocus();
    };
    // 不支持直接粘贴图片的情况下要用到这个函数
    SendAreaComponent.prototype.editPaste = function (e) {
        var _this = this;
        var cbd = e.clipboardData;
        var ua = window.navigator.userAgent;
        // 如果是 Safari 直接 return
        if (!(e.clipboardData && e.clipboardData.items)) {
            return;
        }
        // Mac平台下Chrome49版本以下 复制Finder中的文件的Bug Hack掉
        if (cbd.items &&
            cbd.items.length === 2 &&
            cbd.items[0].kind === 'string' &&
            cbd.items[1].kind === 'file' &&
            cbd.types &&
            cbd.types.length === 2 &&
            cbd.types[0] === 'text/plain' &&
            cbd.types[1] === 'Files' &&
            ua.match(/Macintosh/i) &&
            Number(ua.match(/Chrome\/(\d{2})/i)[1]) < 49) {
            return;
        }
        !cbd.items.length && this.com.showAlert('只能粘贴截图');
        for (var i = 0; i < cbd.items.length; i++) {
            var item = cbd.items[i];
            if (item.kind == 'file') {
                // blob 就是从剪切板获得的文件 可以进行上传或其他操作
                var blob = item.getAsFile();
                if (blob.size === 0) {
                    return;
                }
            }
            // 图片就预览 -文件也预览,可以上传的文件blob
            if (item.type.indexOf('image') > -1) {
                e.preventDefault();
                this.com.preview(blob, function (src) {
                    // 如果前面是一个img标签且是data开头
                    var file = {
                        type: 'img',
                        src: src,
                        file: blob,
                        fid: 'img' + Date.now(),
                    };
                    _this.who.files.push(file);
                    _this.newFileNode(file);
                    _this.keepLastIndex(_this.target);
                });
            }
        }
    };
    // 定位光标到最后
    SendAreaComponent.prototype.keepLastIndex = function (obj) {
        if (window.getSelection) {
            //ie11 10 9 ff safari
            obj.focus(); //解决ff不获取焦点无法定位问题
            var range = window.getSelection(); //创建range
            range.selectAllChildren(obj);
            range.collapseToEnd();
        }
    };
    SendAreaComponent.prototype.setEditDivUsable = function () {
        // 服务端判断
        if (this.isServer) {
            this.who.userList.length &&
                this.target.setAttribute('contenteditable', true);
        }
        else {
            this.target.setAttribute('contenteditable', true);
        }
    };
    SendAreaComponent.prototype.editFocus = function () {
        this.hasHolder = false;
    };
    SendAreaComponent.prototype.editBlur = function (e) {
        this.editText = e.target.innerHTML;
        this.hasHolder = !this.editText;
    };
    SendAreaComponent.prototype.editInput = function (e) {
        // 
    };
    SendAreaComponent.prototype.editKeyUp = function (e) {
        if (e.keyCode === 13) {
            // 回车发送
            this.send();
        }
    };
    SendAreaComponent.prototype.ngAfterContentChecked = function () {
        this.setEditDivUsable();
    };
    SendAreaComponent.prototype.clickImg = function (e) {
        this.com.previewOption.isShowMask = true;
        this.com.previewOption.src = e.target.src;
    };
    SendAreaComponent.prototype.send = function () {
        var _this = this;
        var html = this.target.innerHTML;
        // 去掉注释节点-换行<br>成空
        var div = document.createElement('div');
        div.innerHTML = html;
        var nodes = Array.from(div.childNodes);
        for (var i = nodes.length; i--;) {
            var n = nodes[i];
            if (n.nodeType === 8) {
                this.target.innerHTML = '';
                this.target.appendChild(n);
            }
        }
        var editTxt = div.innerHTML;
        editTxt = editTxt.replace(/<br>/g, '').trim();
        if (editTxt) {
            // 分析editText
            var content_1 = { data: editTxt, mark: Date.now().toString() };
            // 显示到聊天框右侧
            content_1.isServer = this.isServer;
            content_1.position = false;
            this.who.chatList.push(content_1);
            this.isServer && (content_1.rid = this.who.user.id);
            this.com.jumpToChatBottom(this.who);
            var count_1 = 0;
            this.who.files.forEach(function (file, i) {
                editTxt.indexOf(file.fid) === -1 && _this.who.files.splice(i, 1);
            });
            if (this.who.files.length) {
                // 判断files 有没有删除掉
                this.who.files.forEach(function (el) {
                    _this.com.uploadFile(el, function (file, err) {
                        if (err) {
                            // 发送失败
                            var i = _this.who.chatList.findIndex(function (x) { return x.mark === content_1.mark; });
                            i > -1 && (_this.who.chatList[i].isUploaded = -1);
                        }
                        else {
                            count_1++;
                            var span_1 = null;
                            Array.from(div.childNodes).forEach(function (el) {
                                el.id === file.fid && (span_1 = el);
                            });
                            try {
                                if (file.type === 'img') {
                                    span_1.children[0].setAttribute('src', file.src);
                                }
                                else if (file.type === 'file') {
                                    span_1.children[1].setAttribute('href', file.src);
                                    span_1.children[1].setAttribute('download', file.name);
                                }
                            }
                            catch (e) { }
                            if (count_1 === _this.who.files.length) {
                                content_1.data = div.innerHTML;
                                _this.sendMsg(content_1);
                            }
                        }
                    }, function (file) {
                        // chatList 显示进度条
                        // content.uploadProgress = file.uploadProgress;
                    });
                });
            }
            else {
                // 没有文件时
                this.sendMsg(content_1);
            }
        }
        else {
            this.com.showAlert('请填写消息');
        }
        this.target.innerHTML = '';
    };
    SendAreaComponent.prototype.sendMsg = function (content) {
        var _this = this;
        this.com.sendMsg(content, function (data) {
            _this.who.files = [];
            var i = _this.who.chatList.findIndex(function (x) { return x.mark === content.mark; });
            i > -1 && (_this.who.chatList[i].isUploaded = 1);
            setTimeout(function () {
                _this.com.jumpToChatBottom(_this.who);
            }, 1000);
        }, function (res) {
            // 失败-客户端就显示失败的消息到聊天框
            if (res && res.msg === '客服不在线') {
                var offline = {
                    data: '客服不在线,请过几分钟后再访问',
                    mark: Date.now().toString(),
                };
                offline.isServer = true;
                offline.position = true;
                _this.who.chatList.push(offline);
                setTimeout(function () {
                    _this.com.jumpToChatBottom(_this.who);
                }, 1000);
            }
            else {
                var i = _this.who.chatList.findIndex(function (x) { return x.mark === content.mark; });
                i > -1 && (_this.who.chatList[i].isUploaded = -1);
                setTimeout(function () {
                    _this.com.jumpToChatBottom(_this.who);
                }, 1000);
                _this.com.showAlert(res.msg);
            }
        });
    };
    SendAreaComponent.ɵfac = function SendAreaComponent_Factory(t) { return new (t || SendAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
    SendAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendAreaComponent, selectors: [["send-area"]], inputs: { who: "who", keepEnd: "keepEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [[1, "send-area", "clearfix"], ["name", "editText", "id", "editDiv", 1, "textarea", "pos-r", "vm", "ie-scroll", "other-scroll", 3, "focus", "blur", "input", "keyup", "paste"], [1, "bg-light-base", "fr", "vm", "csr", 3, "disabled", "click"]], template: function SendAreaComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SendAreaComponent_Template_div_focus_1_listener() { return ctx.editFocus(); })("blur", function SendAreaComponent_Template_div_blur_1_listener($event) { return ctx.editBlur($event); })("input", function SendAreaComponent_Template_div_input_1_listener($event) { return ctx.editInput($event); })("keyup", function SendAreaComponent_Template_div_keyup_1_listener($event) { return ctx.editKeyUp($event); })("paste", function SendAreaComponent_Template_div_paste_1_listener($event) { return ctx.editPaste($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendAreaComponent_Template_button_click_2_listener() { return ctx.send(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u53D1\u9001");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.hasHolder ? ctx.isServer && !ctx.who.userList.length ? "placeholder-disabled" : "placeholder" : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isServer && !ctx.who.userList.length);
        } }, styles: [".border[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlbmQtYXJlYS9zZW5kLWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NlbmQtYXJlYS9zZW5kLWFyZWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn0gXHJcbiAgIl19 */"] });
    return SendAreaComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'send-area',
                templateUrl: './send-area.component.html',
                styleUrls: ['./send-area.component.css'],
            }]
    }], function () { return [{ type: src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, { who: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], keepEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/assets/js/calendar.js":
/*!***********************************!*\
  !*** ./src/assets/js/calendar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;

(function (undefined) {
  var _global; //工具函数
  //配置合并


  function extend(def, opt, override) {
    for (var k in opt) {
      if (opt.hasOwnProperty(k) && (!def.hasOwnProperty(k) || override)) {
        def[k] = opt[k];
      }
    }

    return def;
  } //日期格式化


  function formartDate(y, m, d, symbol) {
    symbol = symbol || '-';
    m = m.toString()[1] ? m : '0' + m;
    d = d.toString()[1] ? d : '0' + d;
    return y + symbol + m + symbol + d;
  }

  function Schedule(opt) {
    var def = {},
        opt = extend(def, opt, true),
        curDate = opt.date ? new Date(opt.date) : new Date(),
        year = curDate.getFullYear(),
        month = curDate.getMonth(),
        day = curDate.getDate(),
        currentYear = curDate.getFullYear(),
        currentMonth = curDate.getMonth(),
        currentDay = curDate.getDate(),
        selectedDate = '',
        el = document.querySelector(opt.el) || document.querySelector('body'),
        _this = this;

    var bindEvent = function bindEvent() {
      el.addEventListener('click', function (e) {
        switch (e.target.id) {
          case 'nextMonth':
            _this.nextMonthFun();

            break;

          case 'nextYear':
            _this.nextYearFun();

            break;

          case 'prevMonth':
            _this.prevMonthFun();

            break;

          case 'prevYear':
            _this.prevYearFun();

            break;

          default:
            break;
        }

        ;

        if (e.target.className.indexOf('currentDate') > -1) {
          opt.clickCb && opt.clickCb(year, month + 1, e.target.innerHTML);
          selectedDate = e.target.title;
          day = e.target.innerHTML;
          render();
        }
      }, false);
    };

    var init = function init() {
      var scheduleHd = '<div class="schedule-hd">' + '<div>' + '<span class="icon iconfont icon-double-less-than" id="prevYear" title="上一年"></span>' + '<span class="arrow icon iconfont icon-less-than" id="prevMonth" title="上一月"></span>' + '</div>' + '<div class="today">' + formartDate(year, month + 1, day, '-') + '</div>' + '<div>' + '<span class="arrow icon iconfont icon-great-than" id="nextMonth" title="下一月"></span>' + '<span class="arrow icon iconfont icon-double-great-than" id="nextYear" title="下一年"></span>' + '</div>' + '</div>';
      var scheduleWeek = '<ul class="week-ul ul-box">' + '<li class="text-red">日</li>' + '<li>一</li>' + '<li>二</li>' + '<li>三</li>' + '<li>四</li>' + '<li>五</li>' + '<li class="text-red">六</li>' + '</ul>';
      var scheduleBd = '<ul class="schedule-bd ul-box bg-white" ></ul>';
      el.innerHTML = scheduleHd + scheduleWeek + scheduleBd;
      bindEvent();
      render();
    };

    var render = function render() {
      var fullDay = new Date(year, month + 1, 0).getDate(),
          //当月总天数
      startWeek = new Date(year, month, 1).getDay(),
          //当月第一天是周几
      total = (fullDay + startWeek) % 7 == 0 ? fullDay + startWeek : fullDay + startWeek + (7 - (fullDay + startWeek) % 7),
          //元素总个数
      lastMonthDay = new Date(year, month, 0).getDate(),
          //上月最后一天
      eleTemp = [];

      if (day > fullDay) {
        day = fullDay;
      }

      for (var i = 0; i < total; i++) {
        if (i < startWeek) {
          eleTemp.push('<li class="other-month"><span class="dayStyle">' + (lastMonthDay - startWeek + 1 + i) + '</span></li>');
        } else if (i < startWeek + fullDay) {
          var nowDate = formartDate(year, month + 1, i + 1 - startWeek, '-');
          var addClass = '';
          selectedDate == nowDate && (addClass = 'selected-style');
          formartDate(currentYear, currentMonth + 1, currentDay, '-') == nowDate && (addClass = 'today-flag');
          eleTemp.push('<li class="current-month" ><span title=' + nowDate + ' class="currentDate dayStyle ' + addClass + '">' + (i + 1 - startWeek) + '</span></li>');
        } else {
          eleTemp.push('<li class="other-month"><span class="dayStyle">' + (i + 1 - (startWeek + fullDay)) + '</span></li>');
        }
      }

      el.querySelector('.schedule-bd').innerHTML = eleTemp.join('');
      el.querySelector('.today').innerHTML = formartDate(year, month + 1, day, '-');
    };

    this.nextMonthFun = function () {
      if (month + 1 > 11) {
        year += 1;
        month = 0;
      } else {
        month += 1;
      }

      render();
      opt.nextMonthCb && opt.nextMonthCb(year, month + 1, day);
    }, this.nextYearFun = function () {
      year += 1;
      render();
      opt.nextYeayCb && opt.nextYeayCb(year, month + 1, day);
    }, this.prevMonthFun = function () {
      if (month - 1 < 0) {
        year -= 1;
        month = 11;
      } else {
        month -= 1;
      }

      render();
      opt.prevMonthCb && opt.prevMonthCb(year, month + 1, day);
    }, this.prevYearFun = function () {
      year -= 1;
      render();
      opt.prevYearCb && opt.prevYearCb(year, month + 1, day);
    };
    init();
  } //将插件暴露给全局对象


  _global = function () {
    return this || (0, eval)('this');
  }();

  if ( true && module.exports) {
    module.exports = Schedule;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Schedule;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\programs\by-project\DSystem\angularDsys\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map