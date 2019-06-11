"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var auth_1 = require("@nebular/auth");
var routes = [
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
    {
        path: 'auth',
        component: auth_1.NbAuthComponent,
        children: [
            {
                path: '',
                component: auth_1.NbLoginComponent,
            },
            {
                path: 'login',
                component: auth_1.NbLoginComponent,
            },
            {
                path: 'register',
                component: auth_1.NbRegisterComponent,
            },
            {
                path: 'logout',
                component: auth_1.NbLogoutComponent,
            },
            {
                path: 'request-password',
                component: auth_1.NbRequestPasswordComponent,
            },
            {
                path: 'reset-password',
                component: auth_1.NbResetPasswordComponent,
            },
        ],
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
];
var config = {
    useHash: true,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, config)],
            exports: [router_1.RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map