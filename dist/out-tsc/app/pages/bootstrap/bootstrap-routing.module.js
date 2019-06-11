"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var bootstrap_component_1 = require("./bootstrap.component");
var modals_component_1 = require("./modals/modals.component");
var buttons_component_1 = require("./buttons/buttons.component");
var form_inputs_component_1 = require("./form-inputs/form-inputs.component");
var routes = [{
        path: '',
        component: bootstrap_component_1.BootstrapComponent,
        children: [
            {
                path: 'inputs',
                component: form_inputs_component_1.FormInputsComponent,
            },
            {
                path: 'buttons',
                component: buttons_component_1.ButtonsComponent,
            },
            {
                path: 'modal',
                component: modals_component_1.ModalsComponent,
            },
        ],
    }];
var BootstrapRoutingModule = /** @class */ (function () {
    function BootstrapRoutingModule() {
    }
    BootstrapRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], BootstrapRoutingModule);
    return BootstrapRoutingModule;
}());
exports.BootstrapRoutingModule = BootstrapRoutingModule;
//# sourceMappingURL=bootstrap-routing.module.js.map