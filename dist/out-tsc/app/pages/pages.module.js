"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var pages_component_1 = require("./pages.component");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var e_commerce_module_1 = require("./e-commerce/e-commerce.module");
var pages_routing_module_1 = require("./pages-routing.module");
var theme_module_1 = require("../@theme/theme.module");
var miscellaneous_module_1 = require("./miscellaneous/miscellaneous.module");
var PAGES_COMPONENTS = [
    pages_component_1.PagesComponent,
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                pages_routing_module_1.PagesRoutingModule,
                theme_module_1.ThemeModule,
                dashboard_module_1.DashboardModule,
                e_commerce_module_1.ECommerceModule,
                miscellaneous_module_1.MiscellaneousModule,
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map