"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var modal_overlays_component_1 = require("./modal-overlays.component");
var dialog_component_1 = require("./dialog/dialog.component");
var window_component_1 = require("./window/window.component");
var popovers_component_1 = require("./popovers/popovers.component");
var toastr_component_1 = require("./toastr/toastr.component");
var tooltip_component_1 = require("./tooltip/tooltip.component");
var routes = [{
        path: '',
        component: modal_overlays_component_1.ModalOverlaysComponent,
        children: [
            {
                path: 'dialog',
                component: dialog_component_1.DialogComponent,
            },
            {
                path: 'window',
                component: window_component_1.WindowComponent,
            },
            {
                path: 'popover',
                component: popovers_component_1.PopoversComponent,
            },
            {
                path: 'tooltip',
                component: tooltip_component_1.TooltipComponent,
            },
            {
                path: 'toastr',
                component: toastr_component_1.ToastrComponent,
            },
        ],
    }];
var ModalOverlaysRoutingModule = /** @class */ (function () {
    function ModalOverlaysRoutingModule() {
    }
    ModalOverlaysRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ModalOverlaysRoutingModule);
    return ModalOverlaysRoutingModule;
}());
exports.ModalOverlaysRoutingModule = ModalOverlaysRoutingModule;
//# sourceMappingURL=modal-overlays-routing.module.js.map