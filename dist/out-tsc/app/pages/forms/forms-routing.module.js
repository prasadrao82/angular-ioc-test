"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_component_1 = require("./forms.component");
var form_inputs_component_1 = require("./form-inputs/form-inputs.component");
var form_layouts_component_1 = require("./form-layouts/form-layouts.component");
var datepicker_component_1 = require("./datepicker/datepicker.component");
var buttons_component_1 = require("./buttons/buttons.component");
var routes = [{
        path: '',
        component: forms_component_1.FormsComponent,
        children: [
            {
                path: 'inputs',
                component: form_inputs_component_1.FormInputsComponent,
            },
            {
                path: 'layouts',
                component: form_layouts_component_1.FormLayoutsComponent,
            },
            {
                path: 'layouts',
                component: form_layouts_component_1.FormLayoutsComponent,
            },
            {
                path: 'buttons',
                component: buttons_component_1.ButtonsComponent,
            },
            {
                path: 'datepicker',
                component: datepicker_component_1.DatepickerComponent,
            },
        ],
    }];
var FormsRoutingModule = /** @class */ (function () {
    function FormsRoutingModule() {
    }
    FormsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(routes),
            ],
            exports: [
                router_1.RouterModule,
            ],
        })
    ], FormsRoutingModule);
    return FormsRoutingModule;
}());
exports.FormsRoutingModule = FormsRoutingModule;
exports.routedComponents = [
    forms_component_1.FormsComponent,
    form_inputs_component_1.FormInputsComponent,
    form_layouts_component_1.FormLayoutsComponent,
    datepicker_component_1.DatepickerComponent,
];
//# sourceMappingURL=forms-routing.module.js.map