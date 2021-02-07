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




const _c0 = function () { return ["/"]; };
const _c1 = function () { return { "font-size": "14px" }; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
        this.pageHeight = window.innerHeight;
        this.pageWidth = window.innerWidth;
        console.log({
            DATA: this.pageHeight,
            SDGS: this.pageWidth
        });
        window.onresize = (event) => {
            this.pageHeight = window.innerHeight;
            this.pageWidth = window.innerWidth;
        };
    }
}
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









const routes = [
    { path: 'auth', loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(mod => mod.AuthModule) },
    { path: 'client', component: _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"] },
    { path: 'server', component: _server_server_component__WEBPACK_IMPORTED_MODULE_4__["ServerComponent"] },
    { path: 'manage', component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManageComponent"] },
    { path: '', redirectTo: '/client', pathMatch: 'full' },
    { path: '**', component: _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
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
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.com.previewOption.isShowMask = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.com.previewOption.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AppComponent {
    constructor(com) {
        this.com = com;
    }
    ngOnInit() {
    }
}
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

















class AppModule {
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
/* harmony import */ var _shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/chat-content/chat-content.component */ "./src/app/shared/chat-content/chat-content.component.ts");
/* harmony import */ var _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/chat-unread/chat-unread.component */ "./src/app/shared/chat-unread/chat-unread.component.ts");
/* harmony import */ var _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/edit-operate/edit-operate.component */ "./src/app/shared/edit-operate/edit-operate.component.ts");
/* harmony import */ var _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/send-area/send-area.component */ "./src/app/shared/send-area/send-area.component.ts");








class ClientComponent {
    constructor(com, route) {
        this.com = com;
        this.route = route;
        this.chatList = [];
        this.keepEnd = false;
        // 文件列表
        this.files = [];
        // 编辑框数组
        this.editData = [];
        this.unreadOption = { unread: 0, scrollHeight: 0 };
    }
    ngOnInit() {
        // domain=xx&mall=xxx
        let search = window.location.search.substring(1);
        let random = Date.now().toString();
        this.com.pollingStart(this, random, search);
        this.chatElem = document.getElementById('chat');
    }
    getHistory() {
        this.com.getHistory(this, null, (data) => {
            this.chatList = data || [];
            setTimeout(() => {
                this.toBottom();
            }, 500);
        });
    }
    toBottom() {
        this.chatElem.scrollTop = this.chatElem.scrollHeight;
    }
    sendListen(content) {
        content.isServer = false;
        content.position = false;
        this.chatList.push(content);
    }
    fileEmiter(e) {
        this.keepEnd = true;
    }
}
ClientComponent.ɵfac = function ClientComponent_Factory(t) { return new (t || ClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientComponent, selectors: [["app-client"]], decls: 16, vars: 6, consts: [["id", "main", 1, "container", "clearfix"], ["id", "title", 1, "title", "bg-base", "noselect"], ["src", "assets/images/logo.png", "ondragStar", "return false", "id", "logo", 1, "vm"], [1, "content"], ["id", "chat", 1, "chat", "ie-scroll", "other-scroll"], [1, "chat-details", "pos-r"], [3, "chatList", "sendListen"], [3, "who", "unread"], ["id", "edit", 1, "edit-area"], [3, "who", "fileEmiter"], [3, "keepEnd", "who", "sendListen"]], template: function ClientComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5728\u7EBF\u5BA2\u670D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u5546\u57CE\u5BA2\u670D\u5DE5\u4F5C\u65F6\u95F4\u4E3A\u5DE5\u4F5C\u65E5\u76849:00~21:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "chat-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendListen", function ClientComponent_Template_chat_content_sendListen_11_listener($event) { return ctx.sendListen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "chat-unread", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "edit-operate", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileEmiter", function ClientComponent_Template_edit_operate_fileEmiter_14_listener($event) { return ctx.fileEmiter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "send-area", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sendListen", function ClientComponent_Template_send_area_sendListen_15_listener($event) { return ctx.sendListen($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatList", ctx.chatList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx)("unread", ctx.unreadOption.unread);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("keepEnd", ctx.keepEnd)("who", ctx);
    } }, directives: [_shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_3__["ChatContentComponent"], _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_4__["ChatUnreadComponent"], _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_5__["EditOperateComponent"], _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_6__["SendAreaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJ9 */"] });
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







class ComService {
    constructor(http, router) {
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
        this.isLogin = true;
        this.isWindowActive = true;
        this.windowActive();
    }
    // 格式化时间
    formatTime(date = '' /* 日期，可选默认今天 */, fmt = 'YYYY-MM-DD' /*格式字符串默认YYYY-MM-DD hh:mm:ss */) {
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
    }
    timeFromNow(time) {
        //时间转换
        const timestamp = Date.now();
        const createTime = new Date(time);
        time = createTime.getTime();
        const diff = timestamp - time;
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
    }
    windowActive() {
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
        window.onblur = () => {
            this.isWindowActive = false;
        };
        window.onfocus = () => {
            this.isWindowActive = true;
        };
    }
    showAlert(msg) {
        this.alert.show = true;
        this.alert.msg = msg;
        setTimeout(() => {
            this.alert.show = false;
        }, 2000);
    }
    doHttpResponse(res, success, fail) {
        let code = res.code;
        if (code) {
            if (code === 3 || code === 6) {
                // 未登录
                this.isLogin = false;
                this.showAlert('登录失效，请重新登录');
                setTimeout(() => {
                    this.router.navigate(['/auth/login']);
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
    }
    // 发送消息
    sendMsg(msg, success, fail) {
        this.http
            .post(this.api.message, msg)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('sendMsg', () => {
            fail && fail();
        })))
            .subscribe((res) => {
            this.doHttpResponse(res, (data) => {
                success && success(data);
            }, fail);
        });
    }
    handleError(uri, failCallback) {
        return (error) => {
            console.dir(error);
            if (failCallback) {
                setTimeout(() => {
                    failCallback();
                }, 3000);
            }
            else {
                this.showAlert('http request ' + uri + ' error ');
            }
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('A client-side or network error occurred. Handle it accordingly.');
                this.showAlert('网络错误');
            }
            else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong.
                console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
                this.showAlert('后端服务器错误');
            }
            // Return an observable with a user-facing error message.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
        };
    }
    // 开启轮询
    pollingStart(obj, random, domain) {
        let options = {
            observe: 'response',
        };
        this.http
            .get(this.api.polling + '?random=' + random + (domain ? '&' + domain : ''), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('polling', () => {
            this.pollingStart(obj, random, domain);
        })))
            .subscribe((res) => {
            if (!obj.myID) {
                obj.myID = Number(res.headers.get('Uid'));
            }
            // 新建立的连接，要渲染历史记录
            let isNewConnect = res.headers.get('Request-Times') === '1';
            let ret = res.body;
            let isServer = 'rid' in obj;
            this.doHttpResponse(ret, (data) => {
                console.log('data: ', data);
                if (isNewConnect) {
                    if (!isServer) {
                        data.forEach((d) => {
                            this.attachSPT(obj, d, isServer);
                        });
                        obj.chatList = data || [];
                        setTimeout(() => {
                            obj.toBottom();
                        }, 500);
                    }
                }
                else {
                    // 渲染数据到聊天窗口
                    data && this.doPolling(data, obj, isServer);
                }
            });
            // 获取到数据-直接轮询
            this.isLogin && this.pollingStart(obj, random, domain);
        });
    }
    // 图片预览
    preview(file, callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            callback(e.target.result);
        };
    }
    // 上传文件
    uploadFile(fileObj, callback, progressCallback) {
        const formData = new FormData();
        formData.append('file', fileObj.file);
        let api = 'https://io.imdraw.com:444';
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', api, formData, {
            reportProgress: true,
        });
        this.http
            .request(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('uploadFile', () => {
            callback(fileObj, true);
            this.showAlert('文件服务器故障!');
        })))
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                fileObj.uploadProgress = Math.round((100 * event.loaded) / event.total);
                progressCallback && progressCallback(fileObj);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                let body = event.body;
                fileObj.src = api + '/' + body.key;
                fileObj.type === 'file' && (fileObj.src += '?operation=download');
                callback(fileObj);
            }
        });
    }
    debounce(fn, delay = 1000) {
        var timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(fn.bind(this, ...arguments), delay);
        };
    }
    // fid 接收者=我 右， 不是我 左
    /**
     *
     * @param data
     * @param obj
     * @param isServer
     */
    doPolling(data, obj, isServer) {
        console.log('doPolling: ', data);
        data.forEach((d) => {
            let fid = d.fid;
            let isISend = fid === obj.myID;
            let type = d.type;
            switch (type) {
                // 普通消息
                case 0:
                    this.doType0(isISend, obj, d, isServer);
                    break;
                // 已读未读消息
                case 1:
                    this.doType1(d, obj, isISend, isISend);
                    break;
                // 上下线消息
                case 3:
                    this.doType3(isISend, d, isServer, obj);
                    break;
            }
        });
        obj.toBottom();
    }
    // 处理已读未读消息
    doType1(d, obj, isISend, isServer) {
        // 已读未读消息
        if (!isISend) {
            if (isServer) {
                // 服务端
                // 发来的是自己吗-是的话就不用改变-不是就要判断
                if (!isISend) {
                    // 判断发来的是当前用户吗
                    let isCuUserSend = obj.user.id === d.fid;
                    if (isCuUserSend) {
                        // 当前用户发来的设置已读
                        let i = obj.chatList.findIndex(x => x.id === d.id);
                        i > -1 && (obj.chatList[i].readed = true);
                    }
                    else {
                        // 判断发来的是在用户列表的用户吗
                        let isUserInList = obj.userList.findIndex(x => x.id === d.fid) > -1;
                        if (isUserInList) {
                            // 是列表中的用户发来的已读消息-不用处理
                            console.log('是列表中的用户发来的已读消息-不用处理: ');
                        }
                        else {
                            // 不是列表总的用户发来的-用户入用户列表？不处理-看是否有这个用户
                            console.log('不是列表总的用户发来的-用户入用户列表？不处理-看是否有这个用户: ');
                        }
                    }
                }
            }
            else {
                // 客户端
                let i = obj.chatList.findeIndex((x) => x.id === d.id);
                i > -1 && (obj.chatList[i].readed = true);
            }
        }
    }
    // 处理上下限消息
    doType3(isISend, d, isServer, obj) {
        isISend &&
            this.showAlert('游客' + d.fid + (d.data === 'online' ? '上' : '离') + '线');
        // 客服端 处理一下用户列表用户上下线显示
        if (isServer) {
            let i = obj.userList.findIndex((x) => x.id === d.fid);
            i > -1 && (obj.userList[i].state = d.data === 'online');
            console.log('type=3', i, d, obj.userList[i].state);
        }
    }
    // 处理普通消息
    doType0(isISend, obj, d, isServer) {
        let fid = d.fid;
        this.attachSPT(obj, d, isServer);
        if (!isISend) {
            // 不是我发送的消息-判断是客服端还是服务端
            let chatScrollTop = obj.chatElem.scrollTop;
            if (isServer) {
                // 客服端-判断发送方是正在谈话的一方吗
                let isCuUserSend = fid === (obj.user && obj.user.id);
                d.state = true;
                if (isCuUserSend) {
                    obj.chatList.push(d);
                    let name = obj.user && obj.user.name
                        ? '用户' + obj.user.name
                        : '游客' + fid;
                    !this.isWindowActive &&
                        this.deskNotify('消息提示', name + '发来一条新消息');
                    if (this.isWindowActive) {
                        // 当前用户激活窗口
                        if (chatScrollTop === 0) {
                            // 直接发送已读消息
                            this.sendMsg({ id: d.id, rid: obj.user.id, type: 1 });
                        }
                        else {
                            // 有滚动条-直接设置未读已读
                            obj.user.unreadOption = obj.user.unreadOption || {};
                            obj.user.unreadOption.unread++;
                            obj.user.unreadOption.scrollHeight = obj.chatElem.scrollHeight;
                        }
                    }
                    else {
                        // 未激活-直接设置未读已读
                        obj.user.unreadOption = obj.user.unreadOption || {};
                        obj.user.unreadOption.unread++;
                        obj.user.unreadOption.scrollHeight = obj.chatElem.scrollHeight;
                    }
                }
                else {
                    // 不是当前用户发来的消息-判断该用户是否已经在用户列表了
                    let userIndex = obj.userList.findIndex((u) => u.id === fid);
                    let isInUserList = userIndex > -1;
                    if (isInUserList) {
                        let name = obj.userList[userIndex] && obj.userList[userIndex].name
                            ? '用户' + obj.userList[userIndex].name
                            : '游客' + fid;
                        this.deskNotify('消息提示', name + '发来一条新消息');
                        obj.userList[userIndex].unreadOption = obj.userList[userIndex].unreadOption || {};
                        obj.user.unreadOption.unread++;
                        obj.user.unreadOption.scrollHeight = obj.chatElem.scrollHeight;
                    }
                    else {
                        // 不在用户列表-获取用户信息-推送用户到列表
                        this.getUserInfo(fid, (userInfo) => {
                            obj.userList.unshift(userInfo);
                            let name = userInfo.name
                                ? '用户' + userInfo.name
                                : '游客' + fid;
                            d.state = true;
                            !this.isWindowActive &&
                                this.deskNotify('消息提示', name + '发来一条新消息');
                            userInfo.unreadOption = userInfo.unreadOption || {};
                            userInfo.unreadOption.unread++;
                            userInfo.unreadOption.scrollHeight = obj.chatElem.scrollHeight;
                        });
                    }
                }
            }
            else {
                // 客户端-显示在左侧
                obj.chatList.push(d);
                !this.isWindowActive &&
                    this.deskNotify('消息提示', '有一条新消息回复');
                // 给加未读和设置已读消息
                if (this.isWindowActive) {
                    // 窗口激活
                    if (chatScrollTop === 0) {
                        // 窗口没有滚动条-直接阅读了消息-发送已阅读消息
                        this.sendMsg({ id: d.id, type: 1 });
                        d.readed = true;
                    }
                    else {
                        // 有滚动条- 设置未读消息数
                        obj.unreadOption.unread++;
                        obj.unreadOption.scrollHeight = obj.chatElem.scrollHeight;
                    }
                }
                else {
                    // 窗口未激活-增加未读
                    obj.unreadOption.unread++;
                    obj.unreadOption.scrollHeight = obj.chatElem.scrollHeight;
                }
            }
        }
        else {
            // 是我发送的，先看在不在列表中，不在的话就推到列表中      
            let i = obj.chatList.findIndex((x) => x.mark === d.mark);
            i === -1 && obj.chatList.push(d);
        }
    }
    // 处理历史消息
    doHistory(data, isServer) {
        // 设置未读数-和对方一堆信息标志
        // 客户端 判断最后一条消息是不是客户消息，是的话默认全部客服unreadOption.unread=0,否则看最后一条消息是不是两个读者，是的话就是chatList[len-1]:unread
        let lastMsg = data[data.length - 1];
        console.log('lastMsg: ', lastMsg);
        data.foreach(el => {
            if (isServer) {
            }
            else {
                // 客户端
            }
        });
    }
    // 获取用户列表
    getUserList(success) {
        this.http
            .get(this.api.userList)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserList')))
            .subscribe((res) => {
            this.doHttpResponse(res, success);
        });
    }
    getUserInfo(id, cb) {
        this.http
            .get(this.api.userInfo + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUserInfo')))
            .subscribe((res) => {
            this.doHttpResponse(res, cb);
        });
    }
    login(data) {
        this.http
            .post(this.api.login, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('login')))
            .subscribe((res) => {
            this.doHttpResponse(res, () => {
                this.showAlert('登录成功');
                this.isLogin = true;
                // 登录成功跳转客服页面
                setTimeout(() => {
                    this.router.navigate(['/server']);
                }, 2000);
            });
        });
    }
    register(data) {
        this.http
            .post(this.api.register, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('register')))
            .subscribe((res) => {
            this.doHttpResponse(res, () => {
                this.showAlert('注册成功，马上跳转登录');
                setTimeout(() => {
                    this.router.navigate(['/auth/login']);
                }, 2000);
            });
        });
    }
    logout() {
        this.http
            .post(this.api.logout, null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('logout')))
            .subscribe((res) => {
            this.doHttpResponse(res, () => {
                this.showAlert('登出成功!');
                setTimeout(() => {
                    this.router.navigate(['/auth/login']);
                }, 2000);
            });
        });
    }
    getHistory(obj, id, success) {
        let options = {
            observe: obj.myID ? 'body' : 'response',
        };
        let isResponseObserv = options.observe === 'response';
        let isServer = 'rid' in obj;
        this.http
            .get(this.api.history + (id ? '?id=' + id : ''), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHistory')))
            .subscribe((res) => {
            if (!obj.myID && isResponseObserv) {
                obj.myID = Number(res.headers.get('Uid'));
            }
            let ret = isResponseObserv ? res.body : res;
            this.doHttpResponse(ret, (data) => {
                data && data.reverse();
                data &&
                    data.forEach((d) => {
                        this.attachSPT(obj, d, isServer);
                    });
                success(data);
            });
        });
    }
    attachSPT(obj, d, isServer) {
        let isIsend = d.fid === obj.myID;
        d.isServer = isServer ? isIsend : !isIsend;
        d.position = !isIsend;
        d.timeStr = this.timeFromNow(d.time / 1000000);
        d.timeFormat = this.formatTime(d.time / 1000000, 'YYYY-MM-DD hh:mm:ss');
    }
    notifyInstanceEvent(instance) {
        instance.onclick = function (e) {
            console.log('click: ', e);
            window.focus();
            instance.close();
        };
        instance.onerror = function () { };
        instance.onshow = function () { };
        instance.onclose = function () { };
    }
    deskNotify(title, msg) {
        let img = '/assets/images/desk-logo.png';
        var Notification = window.Notification;
        if (Notification) {
            //支持桌面通知
            if (Notification.permission == 'granted') {
                //已经允许通知
                var instance = new Notification(title, {
                    body: msg,
                    icon: img,
                    data: 'localhost/server',
                });
                this.notifyInstanceEvent(instance);
            }
            else {
                //第一次询问或已经禁止通知(如果用户之前已经禁止显示通知，那么浏览器不会再次询问用户的意见，Notification.requestPermission()方法无效)
                Notification.requestPermission(function (status) {
                    if (status === 'granted') {
                        //用户允许
                        var instance = new Notification(title, {
                            body: msg,
                            icon: img,
                        });
                        this.notifyInstanceEvent(instance);
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
                let titleElem = document.getElementsByName('title')[0];
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
    }
}
ComService.ɵfac = function ComService_Factory(t) { return new (t || ComService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ComService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ComService, factory: ComService.ɵfac, providedIn: 'root' });
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



class ToSafePipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    // args={url,html,}
    transform(value, args) {
        args = args || 'url';
        return this._sanitizer['bypassSecurityTrust' + args[0].toUpperCase() + args.slice(1)](value);
    }
}
ToSafePipe.ɵfac = function ToSafePipe_Factory(t) { return new (t || ToSafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
ToSafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toSafe", type: ToSafePipe, pure: true });
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


class ManageComponent {
    constructor() {
        this.serverUrl = "http://localhost:4200/server";
        this.tabIndex = 0;
    }
    ngOnInit() {
    }
    changeTab(e) {
        console.dir(e.target);
        let i = Number(e.target.dataset.index);
        !isNaN(i) && (this.tabIndex = i);
    }
}
ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(); };
ManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageComponent, selectors: [["app-manage"]], decls: 194, vars: 12, consts: [[1, "container", "clearfix"], ["ondragstart", "return false", "id", "nameTitle", 1, "title", "bg-base", "noselect"], ["src", "assets/images/logo.png", 1, "vm"], [1, "fr", "name"], [1, "iconfont", "icon-true", "online"], [1, "state-txt"], ["id", "contentBox", 1, "content", "clearfix"], [1, "fl", "left", "ie-scroll", "other-scroll"], [1, "menu"], ["id", "menu", 1, "iconfont", "icon-menu"], ["id", "customers", 1, "customers", 3, "click"], ["data-index", "0"], ["data-index", "1"], ["data-index", "2"], ["id", "history", 1, "fr", "right", "pos-r"], [1, ""], [1, "vm"], ["id", "lisi", 1, "iconfont", "text-base", "icon-close", "vm-before", "fr", "mr-1", "csr"], [1, "history-content", "ie-scroll", "other-scroll"], ["id", "calendar", 1, "d-none", "pos-a", "calendar"], ["id", "schedule-box", 1, "boxshaw"], ["id", "rili", 1, "fixed-calendar", "boxshaw"], [1, "ml-1", "csr"], ["id", "kanRili", 1, "iconfont", "icon-calendar", "text-base", "vm"], ["id", "riliTxt", 1, "vm"], [1, "history-op", "fr", "mr-1"], ["title", "\u7B2C\u4E00\u9875", 1, "iconfont", "icon-left-stop", "bold"], ["title", "\u4E0A\u4E00\u9875", 1, "iconfont", "icon-less-than"], ["title", "\u4E0B\u4E00\u9875", 1, "iconfont", "icon-great-than"], ["title", "\u6700\u540E\u4E00\u9875", 1, "iconfont", "icon-right-stop", "bold"], ["id", "center", 1, "center"], [1, "customer-list", "ie-scroll", "other-scroll"], [1, "th-tag"], [1, "d-sm-none"], ["id", "tbContent"], [1, "icon", "new"], [1, "pos-r"], [1, "iconfont", "icon-search"], [1, "pos-a", "search-menu"], [1, "active"], ["id", "pagenation", 1, "page"], [1, "customer-list", "server-manage", "ie-scrollother-scroll"], [1, "name-online"], [1, "d-inline-block"], [1, "icon-container", "d-inline-block"], [1, "iconfont", "icon-server"], [1, "online-info", "fr"], [1, "circle"], [1, "dialog-info", "d-inline-block"], [1, "text-right"], [1, "fl", "mr-1"], [1, "dialog-txt"], ["data-id", "1", 1, "fr", "btn-dialog"], ["data-id", "2", 1, "fr", "btn-dialog"], ["data-id", "3", 1, "fr", "btn-dialog"], ["frameborder", "0", "src", "http://localhost:4200/server", 2, "width", "100%", "height", "100%"], ["id", "alert", 1, "alert", "d-none"]], template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
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










function ServerComponent_tr_24_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "110");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServerComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_tr_24_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r7 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.changeUser(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServerComponent_tr_24_span_8_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.user.id === u_r6.id ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](u_r6.state ? "new" : "old");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", (u_r6.state ? "\u5728" : "\u79BB") + "\u7EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r6.state ? "\u5728" : "\u79BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r6.name || "\u6E38\u5BA2" + u_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r6.mall || "\u672A\u77E5\u6765\u6E90");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", u_r6.unread);
} }
function ServerComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6CA1\u6709\u5BA2\u6237\u8BBF\u95EE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServerComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_div_32_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.clickImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const h_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](h_r11.isServer ? "online" : "text-base");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r11.isServer ? "\u5BA2\u670D" + h_r11.fid : h_r11.name || "\u6E38\u5BA2" + h_r11.fid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r11.timeFormat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", h_r11.data, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ServerComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6CA1\u6709\u5386\u53F2\u8BB0\u5F55");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServerComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.getSpecialHistory(ctx_r14.historyDate); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u786E\u5B9A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServerComponent_div_45_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.user.email);
} }
function ServerComponent_div_45_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.user.ip);
} }
function ServerComponent_div_45_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u8BBF\u95EE\u9875\u9762\uFF1A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.user.domain);
} }
function ServerComponent_div_45_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6765\u6E90:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r19.user.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.user.mall);
} }
function ServerComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ServerComponent_div_45_li_6_Template, 4, 1, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServerComponent_div_45_li_7_Template, 4, 1, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServerComponent_div_45_li_8_Template, 5, 1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServerComponent_div_45_li_9_Template, 5, 2, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r5.user.name || "\u6E38\u5BA2" + ctx_r5.user.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.user.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.user.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.user.mall);
} }
const _c0 = function (a0) { return { "margin-top": a0 }; };
class ServerComponent {
    constructor(com, route) {
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
        // 是否显示月日历
        this.isShowMonthCalendar = false;
        this.keepEnd = false;
        this.imgSrc = '';
    }
    ngOnInit() {
        this.historyDate = this.com.formatTime('', 'YYYY-MM-DD');
        this.initCalendar();
        this.chatElem = document.getElementById('chat');
        this.com.getUserList((data) => {
            console.log('com.getUserList data: ', data);
            if (data && data.length) {
                data.forEach(d => {
                    // 5s不回应默认已掉线
                    d.state = Date.now() - d.note_at / 1000000 < 5000;
                });
                this.userList = data;
                this.user = data[0];
                this.getHistory();
            }
        });
        // 开启轮询
        let random = Date.now().toString();
        this.com.pollingStart(this, random, 'role=1');
    }
    clickImg(e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            this.com.previewOption.isShowMask = true;
            this.com.previewOption.src = e.target.src;
        }
    }
    initCalendar() {
        let callback = (y, m, d) => {
            this.historyDate = this.com.formatTime(y + '-' + m + '-' + d, 'YYYY-MM-DD');
        };
        new _assets_js_calendar__WEBPACK_IMPORTED_MODULE_1__({
            el: '#schedule-box',
            clickCb: callback,
            nextMonthCb: callback,
            nextYeayCb: callback,
            prevMonthCb: callback,
            prevYearCb: callback,
        });
    }
    fileEmiter(e) {
        this.keepEnd = true;
    }
    // 历史记录按日期分离
    getSpecialHistory(date) {
        if (this.allHistory.length) {
            this.rightHistory = this.allHistory.filter((el) => {
                return el.timeFormat.indexOf(date) > -1;
            });
            this.isShowMonthCalendar = false;
        }
    }
    showUserList() {
        this.isShowUserList = !this.isShowUserList;
    }
    // 左侧切换用户
    changeUser(i) {
        this.user = this.userList[i];
        this.getHistory();
    }
    getHistory() {
        this.com.getHistory(this, this.user.id, (data) => {
            this.chatList = data || [];
            setTimeout(() => {
                this.toBottom();
            }, 1000);
            if (this.rightShow) {
                this.rightHistory = data;
                this.allHistory = data;
            }
        });
    }
    toBottom() {
        this.chatElem.scrollTop = this.chatElem.scrollHeight;
    }
    logout() {
        // 登出
        this.com.logout();
        this.com.isLogin = false;
    }
    catchTab(e, callback) {
        callback && callback();
        e.stopPropagation();
    }
    showStateMenu() {
        this.stateMenuShow = true;
    }
    hideShowing() {
        this.stateMenuShow = false;
        this.isShowUserList = false;
        this.isShowMonthCalendar = false;
    }
    rightHitoryShow(toggle) {
        if (!toggle) {
            this.com.getHistory(this, this.user.id, (data) => {
                // 显示右侧信息
                this.rightShow = 'right-show';
                this.rightHistory = data;
                this.allHistory = data;
            });
        }
        else {
            this.closeHistory();
        }
    }
    closeHistory() {
        this.rightHistory = [];
        this.rightShow = '';
    }
    showMonthCalendar() {
        this.isShowMonthCalendar = !this.isShowMonthCalendar;
    }
    chooseDateConfirm() {
        this.getSpecialHistory(this.historyDate);
    }
}
ServerComponent.ɵfac = function ServerComponent_Factory(t) { return new (t || ServerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_com_service__WEBPACK_IMPORTED_MODULE_2__["ComService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ServerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerComponent, selectors: [["app-server"]], decls: 55, vars: 29, consts: [[1, "container", "clearfix"], ["ondragstart", "return false", "id", "nameTitle", 1, "title", "bg-base", "noselect", "pos-r"], ["src", "assets/images/logo.png", 1, "vm"], [1, "fr", "name"], [1, "mr-1"], [1, "d-inline-block", 3, "click"], [1, "iconfont", "icon-true", "online"], [1, "state-txt"], [1, "iconfont", "icon-dropdown"], [1, "state-menu", "pos-a"], [1, "active"], [3, "click"], [1, "content", "clearfix"], [1, "fl", "left", "ie-scroll", "other-scroll", "text-center"], [1, "menu", 3, "click"], ["id", "menu", 1, "iconfont", "icon-menu"], ["id", "customers", 1, "customers", "w-100", "h-100", "ie-scroll", "other-scroll"], [1, "user-list"], [3, "class", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "history", 1, "fr", "right"], [1, ""], [1, "vm"], ["id", "lisi", 1, "iconfont", "text-base", "icon-close", "vm-before", "fr", "mr-1", "csr", 3, "click"], [1, "history-content", "ie-scroll", "other-scroll"], ["class", "dialog-r", 3, "click", 4, "ngFor", "ngForOf"], ["class", "dialog-r", 4, "ngIf"], [1, "pos-r"], [1, "pos-a", "calendar"], ["id", "schedule-box", 1, "boxshaw"], ["id", "rili", 1, "fixed-calendar", "boxshaw"], [1, "ml-1", "csr", 3, "click"], ["id", "kanRili", 1, "iconfont", "icon-calendar", "text-base", "vm"], ["id", "riliTxt", 1, "vm"], ["class", "confirm-btn fr", 3, "click", 4, "ngIf"], ["id", "center", 1, "center", "pos-r"], ["class", "user-info pos-a", 4, "ngIf"], ["id", "chat", 1, "chat", "pos-r", "ie-scroll", "other-scroll"], [1, "chat-details"], [3, "chatList"], [3, "who", "unread"], ["id", "edit", 1, "edit-area"], [3, "who", "toggle", "historyEmiter", "fileEmiter"], [3, "who", "keepEnd"], ["id", "alert", 1, "alert", "d-none"], [1, "icon", 3, "title"], ["class", "unread-label pos-a", 4, "ngIf"], [1, "unread-label", "pos-a"], ["colspan", "3"], [1, "dialog-r", 3, "click"], [1, "ml-1"], [1, "ml-1", 3, "innerHTML"], [1, "dialog-r"], [1, "confirm-btn", "fr", 3, "click"], [1, "user-info", "pos-a"], [1, "box"], [1, "item"], ["id", "userIcon", 1, "ml-1", "iconfont", "icon-user", "text-lighter-base", "vm"], ["id", "userName"], ["class", "item", 4, "ngIf"], ["class", "d-480-none item", 4, "ngIf"], ["class", "d-768-none item", 4, "ngIf"], [1, "d-480-none", "item"], [1, "d-768-none", "item"], [1, "mr-1", 3, "title"]], template: function ServerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5728\u7EBF\u5BA2\u670D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_div_click_8_listener() { return ctx.showStateMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u5728\u7EBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u5728\u7EBF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_li_click_16_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u767B\u51FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_div_click_20_listener() { return ctx.showUserList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ServerComponent_tr_24_Template, 9, 9, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ServerComponent_tr_25_Template, 3, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u6D88\u606F\u8BB0\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_i_click_30_listener() { return ctx.closeHistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ServerComponent_div_32_Template, 7, 5, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ServerComponent_div_33_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_span_click_39_listener() { return ctx.showMonthCalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ServerComponent_button_43_Template, 2, 0, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ServerComponent_div_45_Template, 10, 5, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "chat-content", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "chat-unread", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "edit-operate", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("historyEmiter", function ServerComponent_Template_edit_operate_historyEmiter_51_listener($event) { return ctx.rightHitoryShow($event); })("fileEmiter", function ServerComponent_Template_edit_operate_fileEmiter_51_listener($event) { return ctx.fileEmiter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "send-area", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u9519\u8BEF\u63D0\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u5BA2\u670D", ctx.myID, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.stateMenuShow ? "show" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, (ctx.user ? 42 : 0) + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatList", ctx.chatList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx)("unread", ctx.user == null ? null : ctx.user.unread);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx)("toggle", !!ctx.rightShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("who", ctx)("keepEnd", ctx.keepEnd);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_chat_content_chat_content_component__WEBPACK_IMPORTED_MODULE_5__["ChatContentComponent"], _shared_chat_unread_chat_unread_component__WEBPACK_IMPORTED_MODULE_6__["ChatUnreadComponent"], _shared_edit_operate_edit_operate_component__WEBPACK_IMPORTED_MODULE_7__["EditOperateComponent"], _shared_send_area_send_area_component__WEBPACK_IMPORTED_MODULE_8__["SendAreaComponent"]], styles: [".icon-dropdown[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n.state-menu[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  border: 1px solid #d5e5fa;\r\n  top: 100%;\r\n  color: #36404a;\r\n  border-radius: 5px;\r\n  box-shadow: 2px 2px #d5e5fa;\r\n  font-weight: 400;\r\n  font-size: 1rem;\r\n  background-color: #fff;\r\n  overflow: hidden;\r\n  transition: all 2s;\r\n  opacity: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.state-menu.show[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  z-index: 6;\r\n}\r\n\r\n.state-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 5px 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.state-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n  background-color: #92b4f4;\r\n}\r\n\r\n.right-show[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #ecf0f1;\r\n  z-index: 5;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 5px 0;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   .attach-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  padding: 4px 0;\r\n  \r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n  white-space: nowrap;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > div[_ngcontent-%COMP%] {\r\n  display: table;\r\n  width: 100%;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\r\n  width: 100%;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  text-align: center;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  color: #4585ff;\r\n}\r\n\r\n.icon-calendar[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n  width: 5rem;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   .iconfont[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n.customers.show-list[_ngcontent-%COMP%] {\r\n  display: block;\r\n  left: 100%;\r\n  z-index: 9;\r\n  width: 12rem;\r\n  top: 0;\r\n  border-right: 1px solid #ddd;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  box-shadow: 0px 1px 0.5rem #d5e5fa;\r\n  position: absolute;\r\n}\r\n\r\ntr.active[_ngcontent-%COMP%] {\r\n  background-color: #f9ce00;\r\n}\r\n\r\n.show-list[_ngcontent-%COMP%]   .pos-list[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #ffcd06;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]    > .pos-user[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  left: 0;\r\n  top: 100%;\r\n  box-sizing: border-box;\r\n  box-shadow: 1px 0px 0.5rem #d5e5fa;\r\n  z-index: 33;\r\n  background: white;\r\n}\r\n\r\n\r\n\r\n.right-show[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.customers[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.confirm-btn[_ngcontent-%COMP%] {\r\n  background-color: #d5e5fa;\r\n  border: none;\r\n  padding: 5px 20px;\r\n  margin-top: 12px;\r\n  border-radius: 30px;\r\n  box-shadow: 1px 1px #4585ff;\r\n  margin-right: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-list[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n.unread-label[_ngcontent-%COMP%] {\r\n  left: 0;\r\n  font-size: 12px;\r\n  top: 3px;\r\n  border-radius: 4px;\r\n  padding: 2px;\r\n  color: #fff;\r\n  background-color: #f00;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1200.1px) and (min-width: 1024.1px) {\r\n  .right-show[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n  }\r\n\r\n  .right-show[_ngcontent-%COMP%]   .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 1024.1px) and (min-width: 768.1px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n  }\r\n  .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .sm-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768.1px) and (min-width: 480.1px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 5rem;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n  }\r\n  .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  .user-info[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n  .user-info[_ngcontent-%COMP%]   .sm-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    margin-left: 5rem;\r\n    width: auto;\r\n    border-left: 0;\r\n    float: none;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480.1px) {\r\n  .left[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n  }\r\n  .center[_ngcontent-%COMP%] {\r\n    margin-left: 2rem;\r\n  }\r\n  .menu[_ngcontent-%COMP%] {\r\n    width: 2rem;\r\n    display: block;\r\n  }\r\n  .customers[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .user-info[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n  .user-info[_ngcontent-%COMP%]   .sm-hide[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .right-show[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .right-show[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .right-show[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyL3NlcnZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsU0FBUztFQUNULGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHNCQUFtQjtNQUFuQixtQkFBbUI7RUFDbkIsc0JBQThCO01BQTlCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osTUFBTTtFQUNOLDRCQUE0QjtFQUM1QixvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixPQUFPO0VBQ1AsU0FBUztFQUNULHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFDQSxVQUFVOztBQUNWO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxPQUFPO0VBQ1AsZUFBZTtFQUNmLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBQ0EsNkJBQTZCOztBQUM3QjtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFDQSxrQkFBa0I7O0FBQ2xCO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7O0lBRUUsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXJ2ZXIvc2VydmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1kcm9wZG93biB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uc3RhdGUtbWVudSB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZTVmYTtcclxuICB0b3A6IDEwMCU7XHJcbiAgY29sb3I6ICMzNjQwNGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggI2Q1ZTVmYTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDJzO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLnN0YXRlLW1lbnUuc2hvdyB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiA2O1xyXG59XHJcbi5zdGF0ZS1tZW51IGxpIHtcclxuICBwYWRkaW5nOiA1cHggMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnN0YXRlLW1lbnUgbGkuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJiNGY0O1xyXG59XHJcbi5yaWdodC1zaG93IC51c2VyLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udXNlci1pbmZvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuLnVzZXItaW5mbyB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi51c2VyLWluZm8gbGkge1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcbi51c2VyLWluZm8gLmF0dGFjaC1pbmZvIHNwYW4ge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgLyogZm9udC1zaXplOjAuNzVyZW07ICovXHJcbn1cclxuLnVzZXItaW5mbyA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4udXNlci1pbmZvID4gZGl2Omxhc3QtY2hpbGQgPiBkaXYge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udXNlci1pbmZvID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi51c2VyLWluZm8gPiBkaXY6bGFzdC1jaGlsZCA+IGRpdiA+IHNwYW4ge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi51c2VyLWluZm8gYiB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBjb2xvcjogIzQ1ODVmZjtcclxufVxyXG5cclxuLmljb24tY2FsZW5kYXIge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgd2lkdGg6IDVyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubWVudSAuaWNvbmZvbnQge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4uY3VzdG9tZXJzLnNob3ctbGlzdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMTAwJTtcclxuICB6LWluZGV4OiA5O1xyXG4gIHdpZHRoOiAxMnJlbTtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAwLjVyZW0gI2Q1ZTVmYTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbnRyLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5Y2UwMDtcclxufVxyXG4uc2hvdy1saXN0IC5wb3MtbGlzdCB0YWJsZSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2QwNjtcclxufVxyXG4udXNlci1pbmZvID4gLnBvcy11c2VyIHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNoYWRvdzogMXB4IDBweCAwLjVyZW0gI2Q1ZTVmYTtcclxuICB6LWluZGV4OiAzMztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4vKuWPs+S+p+aYvuekuuaXtuWPmOabtCovXHJcbi5yaWdodC1zaG93IC5yaWdodCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmN1c3RvbWVycyB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jb25maXJtLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZTVmYTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggIzQ1ODVmZjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlci1saXN0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnVucmVhZC1sYWJlbCB7XHJcbiAgbGVmdDogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdG9wOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xyXG59XHJcbi8qICAgMTAyNC4xIH4gMTIwMC4xICAgMTIwMCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwLjFweCkgYW5kIChtaW4td2lkdGg6IDEwMjQuMXB4KSB7XHJcbiAgLnJpZ2h0LXNob3cgLmxlZnQge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgfVxyXG4gIC5yaWdodC1zaG93IC5jZW50ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbiAgfVxyXG5cclxuICAucmlnaHQtc2hvdyAuY3VzdG9tZXJzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5yaWdodC1zaG93IC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4vKiA3NjguMSAgLSAxMDI0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjQuMXB4KSBhbmQgKG1pbi13aWR0aDogNzY4LjFweCkge1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gIH1cclxuICAuY3VzdG9tZXJzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAucmlnaHQtc2hvdyAuc20taGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjguMXB4KSBhbmQgKG1pbi13aWR0aDogNDgwLjFweCkge1xyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xyXG4gIH1cclxuICAuY3VzdG9tZXJzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudXNlci1pbmZvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnVzZXItaW5mbyAuc20taGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAucmlnaHQtc2hvdyAucmlnaHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5yaWdodC1zaG93IC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MC4xcHgpIHtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICB9XHJcbiAgLmNlbnRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICB9XHJcbiAgLm1lbnUge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmN1c3RvbWVycyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudXNlci1pbmZvIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnVzZXItaW5mbyAuc20taGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXNob3cgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucmlnaHQtc2hvdyAubGVmdCxcclxuICAucmlnaHQtc2hvdyAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.timeStr);
} }
function ChatContentComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatContentComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", c_r1.readed ? "\u5BF9\u65B9\u5DF2\u8BFB" : "\u5BF9\u65B9\u672A\u8BFB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.readed ? "readed" : "unread");
} }
function ChatContentComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.isServer ? "icon-server" : "icon-user");
} }
function ChatContentComponent_div_0_span_7_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", c_r1.webSrc || c_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ChatContentComponent_div_0_span_7_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 20);
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("icon-" + c_r1.fileType);
} }
function ChatContentComponent_div_0_span_7_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", c_r1.webSrc || "javascript:;", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.name);
} }
function ChatContentComponent_div_0_span_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u4E0A\u4F20\u4E2D\uFF1A", c_r1.uploadProgress, "% ");
} }
function ChatContentComponent_div_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatContentComponent_div_0_span_7_img_1_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatContentComponent_div_0_span_7_i_2_Template, 1, 2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatContentComponent_div_0_span_7_a_3_Template, 2, 2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatContentComponent_div_0_span_7_span_4_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
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
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatContentComponent_div_0_span_8_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.clickImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "toSafe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, c_r1.data, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ChatContentComponent_div_0_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.isServer ? "icon-server" : "icon-user");
} }
function ChatContentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatContentComponent_div_0_p_1_Template, 2, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatContentComponent_div_0_span_3_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatContentComponent_div_0_span_4_Template, 2, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatContentComponent_div_0_span_5_Template, 1, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatContentComponent_div_0_span_7_Template, 5, 6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatContentComponent_div_0_span_8_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatContentComponent_div_0_span_9_Template, 1, 2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", c_r1.timeStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](c_r1.position ? "" : "text-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !c_r1.position && c_r1.isUploaded === 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !c_r1.position && c_r1.isUploaded === 1);
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
class ChatContentComponent {
    constructor(com) {
        this.com = com;
    }
    ngOnInit() {
    }
    clickImg(e) {
        if (e.target.tagName.toLowerCase() === 'img') {
            // 图片点击要放大图片
            this.com.previewOption.src = e.target.src;
            this.com.previewOption.isShowMask = true;
        }
    }
}
ChatContentComponent.ɵfac = function ChatContentComponent_Factory(t) { return new (t || ChatContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"])); };
ChatContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatContentComponent, selectors: [["chat-content"]], inputs: { chatList: "chatList" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["class", "time", 4, "ngIf"], [1, "dialog"], ["class", "uploaded error mr-10", "title", "\u53D1\u9001\u5931\u8D25!", 4, "ngIf"], ["class", "uploaded success mr-10", 3, "title", 4, "ngIf"], ["class", "iconfont text-lighter-base vb-before mr-1", 3, "class", 4, "ngIf"], [1, "chat-content", "bg-light-base", "pos-r"], [3, "class", 4, "ngIf"], ["class", "chat-content-txt text-left client-content ", 3, "innerHTML", "click", 4, "ngIf"], ["class", "iconfont text-lighter-base vb-before ", 3, "class", 4, "ngIf"], [1, "time"], ["title", "\u53D1\u9001\u5931\u8D25!", 1, "uploaded", "error", "mr-10"], [1, "iconfont", "icon-error"], [1, "uploaded", "success", "mr-10", 3, "title"], [1, "iconfont", "text-lighter-base", "vb-before", "mr-1"], [3, "src", 4, "ngIf"], ["class", "iconfont ", 3, "class", 4, "ngIf"], ["class", "file-name", 3, "href", 4, "ngIf"], [4, "ngIf"], [3, "src"], [1, "iconfont"], [1, "file-name", 3, "href"], [1, "chat-content-txt", "text-left", "client-content", 3, "innerHTML", "click"], [1, "iconfont", "text-lighter-base", "vb-before"]], template: function ChatContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatContentComponent_div_0_Template, 10, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_core_to_safe_pipe__WEBPACK_IMPORTED_MODULE_3__["ToSafePipe"]], styles: [".uploaded[_ngcontent-%COMP%]{\r\n    font-size: 12px;    \r\n}\r\n.ml-10[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n}\r\n.mr-10[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n}\r\n.success[_ngcontent-%COMP%]{\r\n    color: green;\r\n    vertical-align: top;\r\n}\r\n.error[_ngcontent-%COMP%]{\r\n    color:red;\r\n    vertical-align: top;\r\n}\r\n.unread[_ngcontent-%COMP%]{\r\n    border-radius:50%;\r\n    background-color: #d7d2d2;\r\n    display:inline-block;\r\n    width:12px;\r\n    height:12px;\r\n    vertical-align: top;\r\n}\r\n.readed[_ngcontent-%COMP%]{\r\n    background-color: rgb(0, 255, 55);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYXQtY29udGVudC9jaGF0LWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NoYXQtY29udGVudC9jaGF0LWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRlZHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgICAgXHJcbn1cclxuLm1sLTEwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLm1yLTEwe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zdWNjZXNze1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi51bnJlYWR7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2QyZDI7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjEycHg7XHJcbiAgICBoZWlnaHQ6MTJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLnJlYWRlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDU1KTtcclxufSJdfQ== */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ChatUnreadComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatUnreadComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toBottom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u672A\u8BFB", ctx_r0.unread, "");
} }
class ChatUnreadComponent {
    constructor() { }
    ngOnInit() {
    }
    toBottom() {
        this.who.toBottom();
    }
}
ChatUnreadComponent.ɵfac = function ChatUnreadComponent_Factory(t) { return new (t || ChatUnreadComponent)(); };
ChatUnreadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatUnreadComponent, selectors: [["chat-unread"]], inputs: { who: "who", unread: "unread" }, decls: 1, vars: 1, consts: [["class", "chat-unread pos-a", 3, "click", 4, "ngIf"], [1, "chat-unread", "pos-a", 3, "click"]], template: function ChatUnreadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatUnreadComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unread);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".chat-unread[_ngcontent-%COMP%]{\r\n    background: rgba(0,0,0,.8);\r\n    font-size: 12px;\r\n    color: #fff;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    cursor:pointer\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NoYXQtdW5yZWFkL2NoYXQtdW5yZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jaGF0LXVucmVhZC9jaGF0LXVucmVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtdW5yZWFke1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlclxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatUnreadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chat-unread',
                templateUrl: './chat-unread.component.html',
                styleUrls: ['./chat-unread.component.css']
            }]
    }], function () { return []; }, { who: [{
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



class EditOperateComponent {
    constructor(com) {
        this.com = com;
        this.fileEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.historyEmiter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isServer = false;
        this.toggle = false;
        this.isLogin = false;
    }
    ngOnInit() {
        this.isServer = 'rid' in this.who;
    }
    /* getImage(e) {
      let file = e.target.files[0];
      console.log('file: ', file);
      if (file.type.indexOf('image') > -1) {
        window.URL = window.URL || window.webkitURL;
        // this.imgEmiter.emit(window.URL.createObjectURL(file));
        e.target.value = '';
      } else {
        this.com.showAlert('请选择png,jpg,gif图片进行上传');
      }
    }
  */
    getFile(e) {
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
        let permitType = [
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
        let file = e.target.files[0];
        if (file.type.indexOf('image') > -1) {
            // 是图片
            this.com.preview(file, (src) => {
                let obj = { type: 'img', fid: 'img' + Date.now(), src, file };
                this.who.files.push(obj);
            });
            this.fileEmiter.emit(true);
        }
        else if (permitType.indexOf(file.type) > -1) {
            // 是文件
            let i = permitType.indexOf(file.type);
            let type = i < 5
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
            let obj = {
                type: 'file',
                fileType: type,
                file,
                name: file.name,
                fid: 'file' + Date.now(),
            };
            this.who.files.push(obj);
            this.fileEmiter.emit(true);
        }
        else {
            this.com.showAlert('不支持此图片/文件格式');
        }
        e.target.value = '';
    }
    getHistory() {
        // 显示右侧 然后把历史记录放到右侧去
        if (this.isServer && !this.who.userList.length)
            return;
        this.historyEmiter.emit(this.toggle);
    }
}
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SendAreaComponent_span_2_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendAreaComponent_span_2_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.clickImg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", d_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SendAreaComponent_span_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} if (rf & 2) {
    const d_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("icon-" + d_r1.fileType);
} }
function SendAreaComponent_span_2_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", d_r1.src || "javascript:;", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", d_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r1.name);
} }
const _c0 = function (a0, a1) { return { border: a0, "file-box": a1 }; };
function SendAreaComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SendAreaComponent_span_2_img_1_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SendAreaComponent_span_2_i_2_Template, 1, 2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SendAreaComponent_span_2_a_3_Template, 2, 3, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, d_r1.border, d_r1.type === "file"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", d_r1.fid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r1.type === "img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r1.type === "file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r1.type === "file");
} }
class SendAreaComponent {
    constructor(com) {
        this.com = com;
        // @Output() sendListen = new EventEmitter();
        this.keepEnd = false;
        this.isServer = false;
        this.target = null;
        this.hasHolder = true;
        this.editText = '';
        this.text = '';
    }
    ngOnInit() {
        this.target = document.getElementById('editDiv');
        this.isServer = 'rid' in this.who;
        this.setEditDivUsable();
    }
    ngOnChanges(changes) {
        if (this.keepEnd) {
            this.keepLastIndex(this.target);
        }
    }
    setBorder(d, e) {
        d.border = !d.border;
        let range = document.createRange();
        range.selectNodeContents(e.target); // document.getElementById('test')
        range.collapse(false);
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        this.editFocus();
    }
    // 不支持直接粘贴图片的情况下要用到这个函数
    editPaste(e) {
        var cbd = e.clipboardData;
        console.log('editPaste: ', cbd);
        var ua = window.navigator.userAgent;
        console.log('ua: ', ua);
        // 如果是 Safari 直接 return
        if (!(e.clipboardData && e.clipboardData.items)) {
            console.log('e.clipboardData: ', e.clipboardData);
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
            console.log('Mac Chorme49一下不支持贴图');
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
                this.com.preview(blob, (src) => {
                    // 如果前面是一个img标签且是data开头
                    this.who.files.push({
                        type: 'img',
                        src,
                        file: blob,
                        fid: 'img' + Date.now(),
                    });
                    this.keepLastIndex(this.target);
                });
            }
        }
    }
    // 定位光标到最后
    keepLastIndex(obj) {
        if (window.getSelection) {
            //ie11 10 9 ff safari
            obj.focus(); //解决ff不获取焦点无法定位问题
            var range = window.getSelection(); //创建range
            range.selectAllChildren(obj);
            range.collapseToEnd();
        }
    }
    setEditDivUsable() {
        // 服务端判断
        if (this.isServer) {
            this.who.userList.length &&
                this.target.setAttribute('contenteditable', true);
        }
        else {
            this.target.setAttribute('contenteditable', true);
        }
    }
    editFocus() {
        this.hasHolder = false;
    }
    editBlur(e) {
        this.editText = e.target.innerHTML;
        this.hasHolder = !this.editText;
    }
    editInput(e) {
        // console.log('editInput: ');
    }
    editKeyUp(e) {
        if (e.keyCode === 13) {
            // 回车发送
            this.send();
        }
    }
    ngAfterContentChecked() {
        this.setEditDivUsable();
    }
    clickImg(e) {
        this.com.previewOption.isShowMask = true;
        this.com.previewOption.src = e.target.src;
    }
    send() {
        this.editText = this.target.innerHTML;
        // 去掉注释节点-换行<br>成空
        let div = document.createElement('div');
        div.innerHTML = this.editText;
        console.log('div.childNodes', div.childNodes);
        div.removeChild(div.childNodes[div.childNodes.length - 1]);
        let editTxt = div.innerHTML;
        editTxt = editTxt.replace(/<br>/g, '').trim();
        if (editTxt) {
            // 分析editText
            let content = { data: editTxt, mark: Date.now().toString() };
            // 显示到聊天框右侧
            content.isServer = this.isServer;
            content.position = false;
            this.who.chatList.push(content);
            this.isServer && (content.rid = this.who.user.id);
            this.who.toBottom();
            let count = 0;
            this.who.files.forEach((file, i) => {
                this.editText.indexOf(file.fid) === -1 && this.who.files.splice(i, 1);
            });
            if (this.who.files.length) {
                // 判断files 有没有删除掉
                this.who.files.forEach((el) => {
                    this.com.uploadFile(el, (file, err) => {
                        if (err) {
                            // 发送失败
                            let i = this.who.chatList.findIndex((x) => x.mark === content.mark);
                            i > -1 && (this.who.chatList[i].isUploaded = -1);
                        }
                        else {
                            count++;
                            let span = null;
                            console.log(div.childNodes);
                            Array.from(div.childNodes).forEach((el) => {
                                console.log('el.id: ', el.id);
                                console.log('file.fid', file.fid);
                                el.id === file.fid && (span = el);
                            });
                            try {
                                if (file.type === 'img') {
                                    span.children[0].setAttribute('src', file.src);
                                }
                                else if (file.type === 'file') {
                                    span.children[1].setAttribute('href', file.src);
                                    span.children[1].setAttribute('download', file.name);
                                }
                            }
                            catch (e) { }
                            if (count === this.who.files.length) {
                                content.data = div.innerHTML;
                                this.sendMsg(content);
                            }
                        }
                    }, (file) => {
                        // chatList 显示进度条
                        // content.uploadProgress = file.uploadProgress;
                    });
                });
            }
            else {
                // 没有文件时
                this.sendMsg(content);
            }
        }
        else {
            this.com.showAlert('请填写消息');
        }
        let lastNode = this.target.childNodes[this.target.childNodes.length - 1];
        this.target.innerHTML = '';
        this.target.appendChild(lastNode);
    }
    sendMsg(content) {
        this.com.sendMsg(content, (data) => {
            this.who.files = [];
            let i = this.who.chatList.findIndex((x) => x.mark === content.mark);
            i > -1 && (this.who.chatList[i].isUploaded = 1);
            setTimeout(() => {
                this.who.toBottom();
            }, 1000);
        }, (res) => {
            // 失败-客户端就显示失败的消息到聊天框
            if (res && res.msg === '客服不在线') {
                let offline = {
                    data: '客服不在线,请过几分钟后再访问',
                    mark: Date.now().toString(),
                };
                offline.isServer = true;
                offline.position = true;
                this.who.chatList.push(offline);
                setTimeout(() => {
                    this.who.toBottom();
                }, 1000);
            }
            else {
                let i = this.who.chatList.findIndex((x) => x.mark === content.mark);
                i > -1 && (this.who.chatList[i].isUploaded = -1);
            }
        });
    }
}
SendAreaComponent.ɵfac = function SendAreaComponent_Factory(t) { return new (t || SendAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"])); };
SendAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendAreaComponent, selectors: [["send-area"]], inputs: { who: "who", keepEnd: "keepEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 4, consts: [[1, "send-area", "clearfix"], ["name", "editText", "id", "editDiv", 1, "textarea", "pos-r", "vm", "ie-scroll", "other-scroll", 3, "focus", "blur", "input", "keyup", "paste"], ["contenteditable", "false", "class", "d-inline-block ", 3, "class", "id", 4, "ngFor", "ngForOf"], [1, "bg-light-base", "fr", "vm", "csr", 3, "disabled", "click"], ["contenteditable", "false", 1, "d-inline-block", 3, "id"], ["onerror", "this.src='/assets/images/error.jpg'", 3, "src", "click", 4, "ngIf"], ["class", "iconfont ", 3, "class", 4, "ngIf"], ["class", "file-name", 3, "href", "title", 4, "ngIf"], ["onerror", "this.src='/assets/images/error.jpg'", 3, "src", "click"], [1, "iconfont"], [1, "file-name", 3, "href", "title"]], template: function SendAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function SendAreaComponent_Template_div_focus_1_listener() { return ctx.editFocus(); })("blur", function SendAreaComponent_Template_div_blur_1_listener($event) { return ctx.editBlur($event); })("input", function SendAreaComponent_Template_div_input_1_listener($event) { return ctx.editInput($event); })("keyup", function SendAreaComponent_Template_div_keyup_1_listener($event) { return ctx.editKeyUp($event); })("paste", function SendAreaComponent_Template_div_paste_1_listener($event) { return ctx.editPaste($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SendAreaComponent_span_2_Template, 4, 9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendAreaComponent_Template_button_click_3_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u53D1\u9001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.hasHolder ? ctx.isServer && !ctx.who.userList.length ? "placeholder-disabled" : "placeholder" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.who.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isServer && !ctx.who.userList.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".border[_ngcontent-%COMP%] {\r\n  border: 1px solid #ddd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlbmQtYXJlYS9zZW5kLWFyZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NlbmQtYXJlYS9zZW5kLWFyZWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn0gXHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'send-area',
                templateUrl: './send-area.component.html',
                styleUrls: ['./send-area.component.css'],
            }]
    }], function () { return [{ type: src_app_core_com_service__WEBPACK_IMPORTED_MODULE_1__["ComService"] }]; }, { who: [{
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

var __WEBPACK_AMD_DEFINE_RESULT__;;(function (undefined) {
    var _global;
    //工具函数
    //配置合并
    function extend (def,opt,override) {
        for(var k in opt){
            if(opt.hasOwnProperty(k) && (!def.hasOwnProperty(k) || override)){
                def[k] = opt[k]
            }
        }
        return def;
    }
    //日期格式化
    function formartDate (y,m,d,symbol) {
        symbol = symbol || '-';
        m = (m.toString())[1] ? m : '0'+m;
        d = (d.toString())[1] ? d : '0'+d;
        return y+symbol+m+symbol+d
    }
 
    function Schedule (opt) {
        var def = {},
            opt = extend(def,opt,true),
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
        var bindEvent = function (){
            el.addEventListener('click',function(e){
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
                };
                if(e.target.className.indexOf('currentDate') > -1){
                    opt.clickCb && opt.clickCb(year, month+1, e.target.innerHTML);
                    selectedDate = e.target.title;
                    day = e.target.innerHTML;
                    render();
                }
            },false)
        }
        var init = function () {
            var scheduleHd = '<div class="schedule-hd">'+
                                '<div>'+
                                    '<span class="icon iconfont icon-double-less-than" id="prevYear" title="上一年"></span>'+
                                    '<span class="arrow icon iconfont icon-less-than" id="prevMonth" title="上一月"></span>'+
                                '</div>'+
                                '<div class="today">'+formartDate(year,month+1,day,'-')+'</div>'+
                                '<div>'+
                                    '<span class="arrow icon iconfont icon-great-than" id="nextMonth" title="下一月"></span>'+
                                    '<span class="arrow icon iconfont icon-double-great-than" id="nextYear" title="下一年"></span>'+
                                '</div>'+
                            '</div>'
            var scheduleWeek = '<ul class="week-ul ul-box">'+
                                    '<li class="text-red">日</li>'+
                                    '<li>一</li>'+
                                    '<li>二</li>'+
                                    '<li>三</li>'+
                                    '<li>四</li>'+
                                    '<li>五</li>'+
                                    '<li class="text-red">六</li>'+
                                '</ul>'
            var scheduleBd = '<ul class="schedule-bd ul-box bg-white" ></ul>'; 
            el.innerHTML = scheduleHd + scheduleWeek + scheduleBd;
            bindEvent();
            render();
        }
        var render = function () {
            var fullDay = new Date(year,month+1,0).getDate(), //当月总天数
            startWeek = new Date(year,month,1).getDay(), //当月第一天是周几
            total = (fullDay+startWeek)%7 == 0 ? (fullDay+startWeek) : fullDay+startWeek+(7-(fullDay+startWeek)%7),//元素总个数
            lastMonthDay = new Date(year,month,0).getDate(), //上月最后一天
            eleTemp = [];
            if(day > fullDay){
                day = fullDay
            }
            for(var i = 0; i < total; i++){
                if(i<startWeek){
                    eleTemp.push('<li class="other-month"><span class="dayStyle">'+(lastMonthDay-startWeek+1+i)+'</span></li>')
                }else if(i<(startWeek+fullDay)){
                    var nowDate = formartDate(year,month+1,(i+1-startWeek),'-');
                    var addClass = '';
                    selectedDate == nowDate && (addClass = 'selected-style');
                    formartDate(currentYear,currentMonth+1,currentDay,'-') == nowDate && (addClass = 'today-flag');
                    eleTemp.push('<li class="current-month" ><span title='+nowDate+' class="currentDate dayStyle '+addClass+'">'+(i+1-startWeek)+'</span></li>')
                }else{
                    eleTemp.push('<li class="other-month"><span class="dayStyle">'+(i+1-(startWeek+fullDay))+'</span></li>')
                }
            }
            el.querySelector('.schedule-bd').innerHTML = eleTemp.join('');
            el.querySelector('.today').innerHTML = formartDate(year,month+1,day,'-');
        };
        this.nextMonthFun = function () {
            if(month+1 > 11){
                year += 1;
                month = 0;
            }else{
                month += 1;
            }
            render();
            opt.nextMonthCb && opt.nextMonthCb(year,month+1,day);
        },
        this.nextYearFun = function () {
            year += 1;
            render();
            opt.nextYeayCb && opt.nextYeayCb(year,month+1,day);
        },
        this.prevMonthFun = function () {
            if(month-1 < 0){
                year -= 1;
                month = 11;
            }else{
                month -= 1;
            }
            render();
            opt.prevMonthCb && opt.prevMonthCb(year,month+1,day);
        },
        this.prevYearFun = function () {
            year -= 1;
            render();
            opt.prevYearCb && opt.prevYearCb(year,month+1,day);
        }
        init();
    }
    //将插件暴露给全局对象
    _global = (function(){return this || (0,eval)('this')}());
    if( true && module.exports){
        module.exports = Schedule;
    }else if (true){
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return Schedule;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    }else {}
 
}());

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
const environment = {
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
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map