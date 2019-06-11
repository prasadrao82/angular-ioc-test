"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var smartapps_component_1 = require("./smartapps.component");
var airq_component_1 = require("./airq/airq.component");
var routes = [{
        path: '',
        component: smartapps_component_1.SmartappsComponent,
        children: [{
                path: 'airq',
                component: airq_component_1.AirqComponent,
            }],
    }];
var SmartappsRoutingModule = /** @class */ (function () {
    function SmartappsRoutingModule() {
    }
    SmartappsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], SmartappsRoutingModule);
    return SmartappsRoutingModule;
}());
exports.SmartappsRoutingModule = SmartappsRoutingModule;
exports.routedComponents = [
    smartapps_component_1.SmartappsComponent,
    airq_component_1.AirqComponent,
];
//# sourceMappingURL=smartapps-routing.module.js.map