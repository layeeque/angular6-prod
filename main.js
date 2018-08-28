(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-form/add-form.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-form/add-form.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-form/add-form.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-form/add-form.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\" style=\"width:40%\" id=\"add\">\n  \n    <button  class=\"btn btn-primary btn-xs\" data-title=\"add\" [routerLink]=\"['/dashboard']\">\n      Back to dashboard </button>&nbsp;&nbsp;\n    <div>\n      \n      <h4 >Add Your Details</h4>\n    \n    </div>\n    <div>\n      <div class=\"form-group\">\n        First Name :\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newfname\">\n      </div>\n      <div class=\"form-group\">\n\n        Last Name\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newlname\">\n      </div>\n      <div class=\"form-group\">\n\n        Address :\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newaddress\">\n      </div>\n      <div class=\"form-group\">\n\n        State :\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newstate\">\n      </div>\n      <div class=\"form-group\">\n\n        Mobile :\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newmobile\">\n      </div>\n\n    </div>\n\n    <div >\n      <button type=\"button\" class=\"btn btn-warning btn-lg\" style=\"width: 100%;\" (click)=\"add()\">\n        <span class=\"glyphicon glyphicon-ok-sign\">Confirm to Add</span>\n      </button>\n    </div>\n   \n\n\n \n\n</div>"

/***/ }),

/***/ "./src/app/add-form/add-form.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-form/add-form.component.ts ***!
  \************************************************/
/*! exports provided: AddFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFormComponent", function() { return AddFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _addformservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addformservice.service */ "./src/app/add-form/addformservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddFormComponent = /** @class */ (function () {
    function AddFormComponent(_AddformserviceService, router) {
        this._AddformserviceService = _AddformserviceService;
        this.router = router;
    }
    AddFormComponent.prototype.ngOnInit = function () {
    };
    AddFormComponent.prototype.add = function () {
        var _this = this;
        this._AddformserviceService.add(this.newfname, this.newlname, this.newaddress, this.newstate, this.newmobile).subscribe(function (data) {
            console.log("data is " + data);
            _this.router.navigate(['dashboard']);
        });
    };
    AddFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-form',
            template: __webpack_require__(/*! ./add-form.component.html */ "./src/app/add-form/add-form.component.html"),
            styles: [__webpack_require__(/*! ./add-form.component.css */ "./src/app/add-form/add-form.component.css")],
            providers: [_addformservice_service__WEBPACK_IMPORTED_MODULE_1__["AddformserviceService"]]
        }),
        __metadata("design:paramtypes", [_addformservice_service__WEBPACK_IMPORTED_MODULE_1__["AddformserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddFormComponent);
    return AddFormComponent;
}());



/***/ }),

/***/ "./src/app/add-form/addformservice.service.ts":
/*!****************************************************!*\
  !*** ./src/app/add-form/addformservice.service.ts ***!
  \****************************************************/
/*! exports provided: AddformserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddformserviceService", function() { return AddformserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddformserviceService = /** @class */ (function () {
    function AddformserviceService(_http) {
        this._http = _http;
    }
    AddformserviceService.prototype.add = function (addfname, addlname, addaddress, addstate, addmobile) {
        return this._http.post("http://localhost:5000/add", { "fname": addfname, "lname": addlname, "address": addaddress, "state": addstate, "mobile": addmobile, "token": localStorage.getItem('token') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AddformserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AddformserviceService);
    return AddformserviceService;
}());



/***/ }),

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    // The '* => *' will trigger the animation to change between any two states
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-100%)' })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', 
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(+100%)' }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <div *ngIf=\"afservice.user | async as user\">\n    <h3>hello {{user.displayName}}</h3>\n    <img [src]=\"user.photoURL\">\n    <button (click)=\"afservice.logoutWithGoogle()\">logout</button>\n\n</div>\n </div>\n\n\n<main [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</main>\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./src/app/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(afservice) {
        this.afservice = afservice;
        this.title = 'World ';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_animation__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"]]
        }),
        __metadata("design:paramtypes", [_services_validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _dash_boardtable_dash_boardtable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dash-boardtable/dash-boardtable.component */ "./src/app/dash-boardtable/dash-boardtable.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/esm5/web-storage.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-form/add-form.component */ "./src/app/add-form/add-form.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// import { TokenInterceptService } from './services/token-intercept.service';
function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_15__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_15__["GoogleLoginProvider"]("1092754136909-250693fpthv3bfdi9kot0mmln664icud.apps.googleusercontent.com")
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
                _dash_boardtable_dash_boardtable_component__WEBPACK_IMPORTED_MODULE_11__["DashBoardtableComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"],
                _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_16__["AddFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routes__WEBPACK_IMPORTED_MODULE_2__["Routing"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_15__["SocialLoginModule"],
                angular_web_storage__WEBPACK_IMPORTED_MODULE_14__["AngularWebStorageModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]
            ],
            providers: [_services_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"], _auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_15__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }
                // , {
                //   provide: HTTP_INTERCEPTORS,
                //   useClass: TokenInterceptService,
                //   multi: true
                // }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(validService, _router) {
        this.validService = validService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.validService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/dash-boardtable/dash-boardtable.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dash-boardtable/dash-boardtable.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dash-boardtable/dash-boardtable.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dash-boardtable/dash-boardtable.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n   \n  <button class=\"btn btn-primary btn-xs\" data-title=\"add\"  routerLink=\"addNewItem\"  >Add </button>\n  <div class=\"row\">\n\n   \n    <div class=\"row\">\n    <div class=\"col-md-12\">\n  \n      <div class=\"table-responsive\">\n        <ngx-spinner bdColor=\"rgba(250,250,250,0.6)\"\n        size=\"medium\"\n        color=\"#fffff\"\n        type=\"ball-circus\">\n       <p style=\"font-size: 20px; color: black\">Entry is Getting Deleted...</p></ngx-spinner>\n\n        <table id=\"mytable\" class=\"table table-bordred \" style=\"margin-top:3%\">\n\n          <thead>\n\n            <th>\n              <input type=\"checkbox\" id=\"checkall\" />\n            </th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Address</th>\n            <th>Email</th>\n            <th>Contact</th>\n            <th>Edit</th>\n\n            <th>Delete</th>\n          </thead>\n          <tbody *ngIf=\"data\">\n\n            <tr *ngFor=\"let content of data\" >\n              <td>\n                <input type=\"checkbox\" class=\"checkthis\" />\n              </td>\n              <td>{{content.fname}}</td>\n              <td>{{content.lname}}</td>\n              <td>{{content.address}}</td>\n              <td>{{content.state}}</td>\n              <td>+{{content.mobile}}</td>\n              <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\">\n                  <button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" data-toggle=\"modal\" data-target=\"#edit\" (click)=\"edit(content._id)\">\n                    <span class=\"glyphicon glyphicon-pencil\"></span>\n                  </button>\n                </p>\n              </td>\n              <td>\n                <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\">\n                  <button class=\"btn btn-danger btn-xs\" (click)=\"delete(content._id)\">\n                    <span class=\"glyphicon glyphicon-trash\"></span>\n                  </button>\n                </p>\n              </td>\n            </tr>\n\n\n          </tbody>\n\n        </table>\n\n        <div class=\"clearfix\"></div>\n        <ul class=\"pagination pull-right\">\n          <li class=\"disabled\">\n            <a href=\"#\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n          </li>\n          <li class=\"active\">\n            <a href=\"#\">1</a>\n          </li>\n          <li>\n            <a href=\"#\">2</a>\n          </li>\n          <li>\n            <a href=\"#\">3</a>\n          </li>\n          <li>\n            <a href=\"#\">4</a>\n          </li>\n          <li>\n            <a href=\"#\">5</a>\n          </li>\n          <li>\n            <a href=\"#\">\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\n            </a>\n          </li>\n        </ul>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dash-boardtable/dash-boardtable.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dash-boardtable/dash-boardtable.component.ts ***!
  \**************************************************************/
/*! exports provided: DashBoardtableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardtableComponent", function() { return DashBoardtableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dash_boardtable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dash-boardtable.service */ "./src/app/dash-boardtable/dash-boardtable.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashBoardtableComponent = /** @class */ (function () {
    function DashBoardtableComponent(dashboardService, router, spinner) {
        this.dashboardService = dashboardService;
        this.router = router;
        this.spinner = spinner;
        this._editedData = "hey";
        this._edit = false;
        this.dashboard = true;
    }
    DashBoardtableComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.setItem("edit", "false");
        this.dashboardService.loadData().subscribe(function (data) {
            _this.data = data;
        });
    };
    DashBoardtableComponent.prototype.edit = function (id) {
        var _this = this;
        this.dashboardService.edit(id).subscribe(function (data1) {
            console.log("from bkend " + JSON.stringify(data1));
            _this._editedData = data1;
            _this._edit = true;
            localStorage.setItem("edit", "true");
            localStorage.setItem("_id", data1._id);
            localStorage.setItem("fname", data1.fname);
            localStorage.setItem("lname", data1.lname);
            localStorage.setItem("address", data1.address);
            localStorage.setItem("state", data1.state);
            localStorage.setItem("mobile", data1.mobile);
            _this.router.navigateByUrl('dashboard/editItem');
        });
    };
    DashBoardtableComponent.prototype.delete = function (_id) {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 3000);
        this.dashboardService.deleteData(_id).subscribe(function (data) {
            window.location.reload();
        });
    };
    DashBoardtableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash-boardtable',
            template: __webpack_require__(/*! ./dash-boardtable.component.html */ "./src/app/dash-boardtable/dash-boardtable.component.html"),
            styles: [__webpack_require__(/*! ./dash-boardtable.component.css */ "./src/app/dash-boardtable/dash-boardtable.component.css")],
            providers: [_dash_boardtable_service__WEBPACK_IMPORTED_MODULE_1__["DashBoardtableService"]]
        }),
        __metadata("design:paramtypes", [_dash_boardtable_service__WEBPACK_IMPORTED_MODULE_1__["DashBoardtableService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], DashBoardtableComponent);
    return DashBoardtableComponent;
}());



/***/ }),

/***/ "./src/app/dash-boardtable/dash-boardtable.service.ts":
/*!************************************************************!*\
  !*** ./src/app/dash-boardtable/dash-boardtable.service.ts ***!
  \************************************************************/
/*! exports provided: DashBoardtableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardtableService", function() { return DashBoardtableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashBoardtableService = /** @class */ (function () {
    function DashBoardtableService(http) {
        this.http = http;
    }
    DashBoardtableService.prototype.loadData = function () {
        return this.http.post("http://localhost:5000/loadData", { "token": localStorage.getItem('token') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DashBoardtableService.prototype.edit = function (id) {
        return this.http.post("http://localhost:5000/edit", { "id": id, "token": localStorage.getItem('token') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DashBoardtableService.prototype.deleteData = function (id) {
        return this.http.post("http://localhost:5000/deleteData", { "id": id, "token": localStorage.getItem('token') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DashBoardtableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DashBoardtableService);
    return DashBoardtableService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"height:15%;\" >\n\n  \n\n   {{name}} &nbsp;&nbsp;\n    <span>\n      <img style=\"border-radius: 50%;height: 55px\" src={{image}}>\n    </span>\n  <button class=\"btn btn-primary btn-xs pull-right\" data-title=\"add\" (click)=\"logout()\">logout </button>\n</div>\n\n<!-- <router-outlet ></router-outlet> -->\n\n\n<main [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\n    <router-outlet #o=\"outlet\"></router-outlet>\n  </main>\n  "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animation */ "./src/app/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_LoginComponent, router) {
        this._LoginComponent = _LoginComponent;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('in');
        this.image = localStorage.getItem("photo");
        this.name = localStorage.getItem("name");
        // this.router.events.subscribe((val:any) => {
        //   if(val.url === "/dashboard"){ console.log("I am in dashboard");this.dashboard=false}
        //   if(val.url === "/dashboard/addNewItem"){ console.log("I am in add");this.dashboard=true}
        //   if(val.url === "/dashboard/editItem"){ console.log("I am in edit");this.dashboard=true}
        //  })
    };
    DashboardComponent.prototype.logout = function () {
        this._LoginComponent.logout();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")],
            providers: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]],
            animations: [_animation__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]]
        }),
        __metadata("design:paramtypes", [_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: left\"></div>\n<div class=\"container\" style=\"width:40%\" id=\"add\">\n    <button  class=\"btn btn-primary btn-xs\" data-title=\"add\" [routerLink]=\"['/dashboard']\">\n      Back to dashboard </button>&nbsp;&nbsp;\n  <div>\n\n    <div>\n      \n     \n      <h4 >Edit Your Details</h4>\n    </div>\n    <div>\n      <div class=\"form-group\">\n        First Name :\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newfname\">\n      </div>\n      <div class=\"form-group\">\n\n        Last Name\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newlname\">\n      </div>\n      <div class=\"form-group\">\n\n        Address :\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newaddress\">\n      </div>\n      <div class=\"form-group\">\n\n        State :\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newstate\">\n      </div>\n      <div class=\"form-group\">\n\n        Mobile :\n        <input class=\"form-control \" type=\"text\" [(ngModel)]=\"newmobile\">\n      </div>\n\n    </div>\n\n  \n    <div >\n      <button type=\"button\" class=\"btn btn-warning btn-lg\" style=\"width: 100%;\" (click)=\"editfunction()\">\n        <span  class=\"glyphicon glyphicon-ok-sign\">Confirm to Edit</span>\n      </button>\n    </div>\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formservice.service */ "./src/app/form/formservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dash_boardtable_dash_boardtable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dash-boardtable/dash-boardtable.component */ "./src/app/dash-boardtable/dash-boardtable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormComponent = /** @class */ (function () {
    function FormComponent(_FormserviceService, router, dashboard) {
        this._FormserviceService = _FormserviceService;
        this.router = router;
        this.dashboard = dashboard;
        this.edit = localStorage.getItem("edit");
    }
    FormComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("edit") == "true") {
            this.newfname = localStorage.getItem("fname");
            this.newlname = localStorage.getItem("lname");
            this.newaddress = localStorage.getItem("address");
            this.newstate = localStorage.getItem("state");
            this.newmobile = localStorage.getItem("mobile");
            this._id = localStorage.getItem("_id");
        }
    };
    FormComponent.prototype.editfunction = function () {
        var _this = this;
        this._FormserviceService.update(localStorage.getItem("_id"), this.newfname, this.newlname, this.newaddress, this.newstate, this.newmobile).subscribe(function (data) {
            console.log("data is " + data);
            _this.router.navigate(['dashboard']);
        });
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")],
            providers: [_formservice_service__WEBPACK_IMPORTED_MODULE_1__["FormserviceService"], _dash_boardtable_dash_boardtable_component__WEBPACK_IMPORTED_MODULE_3__["DashBoardtableComponent"]]
        }),
        __metadata("design:paramtypes", [_formservice_service__WEBPACK_IMPORTED_MODULE_1__["FormserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _dash_boardtable_dash_boardtable_component__WEBPACK_IMPORTED_MODULE_3__["DashBoardtableComponent"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/form/formservice.service.ts":
/*!*********************************************!*\
  !*** ./src/app/form/formservice.service.ts ***!
  \*********************************************/
/*! exports provided: FormserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormserviceService", function() { return FormserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormserviceService = /** @class */ (function () {
    function FormserviceService(_http) {
        this._http = _http;
    }
    FormserviceService.prototype.update = function (_id, addfname, addlname, addaddress, addstate, addmobile) {
        return this._http.post("http://localhost:5000/update", { "_id": _id, "fname": addfname, "lname": addlname, "address": addaddress, "state": addstate, "mobile": addmobile, "token": localStorage.getItem('token') }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    FormserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FormserviceService);
    return FormserviceService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n.container{\r\n  padding-top: 7%;\r\n}\r\n.card-container.card {\r\n  max-width: 50%;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n* Card component\r\n*/\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n* Form styles\r\n*/\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n        <h3 style=\"text-align: center\">{{message}}</h3>\n  <div class=\"card card-container\">\n        <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n      <p id=\"profile-name\" class=\"profile-name-card\"></p>\n    \n          <span id=\"reauth-email\" class=\"reauth-email\"></span>\n          <input type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\"  name=\"ename\" [(ngModel)]=\"ename\" [ngModelOptions]=\"{standalone: true}\" autofocus>\n  \n          <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" [ngModelOptions]=\"{standalone: true}\" >\n    \n          <div id=\"remember\" class=\"checkbox\">\n              <label>\n                  <input type=\"checkbox\" value=\"remember-me\"> Remember me\n              </label>\n          </div>\n    <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"signIn()\">Sign in</button>\n             \n      <button class=\"loginBtn loginBtn--google\" (click)=\"socialSignIn('google')\">Google</button><br/><br/>\n      <a href=\"#\" class=\"forgot-password\">\n          Forgot the password?\n      </a>\n\n      <a href=\"/registration\" class=\"forgot-password\">New Registration</a>\n  </div>\n  \n</div>\n\n<div *ngIf=\"afservice.user | async as user\">\n    <h3>hello {{user.displayName}}</h3>\n    <img [src]=\"user.photoURL\">\n    <button (click)=\"afservice.logoutWithGoogle()\">logout</button>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/esm5/web-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, router, afservice, socialAuthService, session) {
        this._loginService = _loginService;
        this.router = router;
        this.afservice = afservice;
        this.socialAuthService = socialAuthService;
        this.session = session;
        this.tem = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('in login');
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("photo");
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        var result = this._loginService.validateUser(this.ename, this.password).subscribe(function (result) {
            if (result.success == 1) {
                console.log("the returned value is " + JSON.stringify(result));
                localStorage.setItem("name", result.data[0].name);
                localStorage.setItem("token", result.token);
                _this.session.set("socialLogin", false);
                _this.router.navigateByUrl('/dashboard');
            }
            else {
                _this.message = "Invalid User";
                _this.router.navigate(['']);
            }
        });
    };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID;
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            // ...
            console.log("userData.name " + userData.name);
            var result = _this._loginService.validateUserSocial(userData.name).subscribe(function (result) {
                if (result) {
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("name", userData.name);
                    localStorage.setItem("photo", userData.image);
                    _this.router.navigate(['dashboard']);
                    _this.session.set("socialLogin", true);
                }
                else {
                    _this.router.navigate(['']);
                }
            });
        });
    };
    LoginComponent.prototype.logout = function () {
        if (this.session.get("socialLogin") == true) {
            this.socialAuthService.signOut();
        }
        localStorage.removeItem("token");
        this.router.navigate(['']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthService"], angular_web_storage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        this.http = _http;
    }
    LoginService.prototype.validateUser = function (ename, password) {
        return this.http.post("http://localhost:5000/login", { "name": ename, "password": password }, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    LoginService.prototype.loggedIn = function () {
        return !!localStorage.getItem("token");
    };
    LoginService.prototype.validateUserSocial = function (ename) {
        return this.http.post("http://localhost:5000/social", { "name": ename }, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"width:40%\"><div>{{msg}} <a [routerLink]=\"['/dashboard']\">Click here to go to Dashboard</a></div>\n  <div class=\"card card-container b_middle\">\n      <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n      <img id=\"profile-img\" style=\"border-radius:50%;height:100px\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n      <p id=\"profile-name\" class=\"profile-name-card\"></p>\n      <!-- <form class=\"form-signin\"> -->\n          <span id=\"reauth-email\" class=\"reauth-email\"></span>\n          <!-- <input type=\"text\" id=\"inputid\" class=\"form-control\" placeholder=\"Id\"  name=\"id\" [(ngModel)]=\"id\" [ngModelOptions]=\"{standalone: true}\" autofocus> -->\n          <input type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\"  name=\"ename\" [(ngModel)]=\"ename\" [ngModelOptions]=\"{standalone: true}\" autofocus>\n  \n          <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" [ngModelOptions]=\"{standalone: true}\" >\n          <!-- <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" [ngModelOptions]=\"{standalone: true}\" > -->\n        \n          <div id=\"remember\" class=\"checkbox\">\n              <label>\n                  <input type=\"checkbox\" value=\"remember-me\"> Remember me\n              </label>\n          </div>\n          <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"register()\">Sign in</button>\n      <!-- </form> -->\n      <!-- /form -->\n\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.service */ "./src/app/registration/registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(reg, router) {
        this.reg = reg;
        this.router = router;
        this.msg = "";
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.reg.registerUser(this.id, this.ename, this.password).subscribe(function (res) {
            _this.msg = res.message;
            console.log(res);
            //this.router.navigate(['/dashboard'])
        });
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")],
            providers: [_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"]]
        }),
        __metadata("design:paramtypes", [_registration_service__WEBPACK_IMPORTED_MODULE_1__["RegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.service.ts":
/*!******************************************************!*\
  !*** ./src/app/registration/registration.service.ts ***!
  \******************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationService = /** @class */ (function () {
    function RegistrationService(_http) {
        this._http = _http;
        this.http = _http;
    }
    RegistrationService.prototype.registerUser = function (id, ename, password) {
        console.log("about to hit the sign api");
        return this.http.post("http://localhost:5000/signUp", { "empId": id, "name": ename, "password": password }, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _dash_boardtable_dash_boardtable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dash-boardtable/dash-boardtable.component */ "./src/app/dash-boardtable/dash-boardtable.component.ts");
/* harmony import */ var _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-form/add-form.component */ "./src/app/add-form/add-form.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: "/login", pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [{
                path: '',
                component: _dash_boardtable_dash_boardtable_component__WEBPACK_IMPORTED_MODULE_6__["DashBoardtableComponent"]
            }, {
                path: 'addNewItem',
                component: _add_form_add_form_component__WEBPACK_IMPORTED_MODULE_7__["AddFormComponent"]
            },
            {
                path: 'editItem',
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"]
            }]
    },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var Routing = /** @class */ (function () {
    function Routing() {
    }
    Routing = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], Routing);
    return Routing;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationService = /** @class */ (function () {
    function ValidationService(_http) {
        this._http = _http;
        this.http = _http;
    }
    ValidationService.prototype.loggedIn = function () {
        return !!localStorage.getItem("token");
    };
    ValidationService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ValidationService);
    return ValidationService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCuT8slNWxpje99S4FWED-VlGSklQGqSFs',
        authDomain: 'abc-ajyoan.firebaseapp.com',
        databaseURL: 'https://abc-ajyoan.firebaseio.com',
        projectId: 'abc-ajyoan',
        storageBucket: 'abc-ajyoan.appspot.com',
        messagingSenderId: '305574172662'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mdlayeeque.urrehman\Desktop\Ang_2\myProject\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map