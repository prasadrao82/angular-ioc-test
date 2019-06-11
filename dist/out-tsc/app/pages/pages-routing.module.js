"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var pages_component_1 = require("./pages.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var e_commerce_component_1 = require("./e-commerce/e-commerce.component");
var not_found_component_1 = require("./miscellaneous/not-found/not-found.component");
var routes = [{
        path: '',
        component: pages_component_1.PagesComponent,
        children: [{
                path: 'dashboard',
                component: e_commerce_component_1.ECommerceComponent,
            }, {
                path: 'iot-dashboard',
                component: dashboard_component_1.DashboardComponent,
            }, {
                path: 'ui-features',
                loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
            }, {
                path: 'modal-overlays',
                loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
            }, {
                path: 'extra-components',
                loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
            }, {
                path: 'bootstrap',
                loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule',
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule',
            }, {
                path: 'editors',
                loadChildren: './editors/editors.module#EditorsModule',
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule',
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule',
            }, {
                path: 'smartapps',
                loadChildren: './smartapps/smartapps.module#SmartappsModule',
            }, {
                path: 'miscellaneous',
                loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }, {
                path: '**',
                component: not_found_component_1.NotFoundComponent,
            }],
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());
exports.PagesRoutingModule = PagesRoutingModule;
//# sourceMappingURL=pages-routing.module.js.map