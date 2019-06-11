"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var miscellaneous_component_1 = require("./miscellaneous.component");
var not_found_component_1 = require("./not-found/not-found.component");
var routes = [{
        path: '',
        component: miscellaneous_component_1.MiscellaneousComponent,
        children: [{
                path: '404',
                component: not_found_component_1.NotFoundComponent,
            }],
    }];
var MiscellaneousRoutingModule = /** @class */ (function () {
    function MiscellaneousRoutingModule() {
    }
    MiscellaneousRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], MiscellaneousRoutingModule);
    return MiscellaneousRoutingModule;
}());
exports.MiscellaneousRoutingModule = MiscellaneousRoutingModule;
exports.routedComponents = [
    miscellaneous_component_1.MiscellaneousComponent,
    not_found_component_1.NotFoundComponent,
];
//# sourceMappingURL=miscellaneous-routing.module.js.map