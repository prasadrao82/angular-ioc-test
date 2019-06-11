"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_module_1 = require("../../@theme/theme.module");
var bootstrap_routing_module_1 = require("./bootstrap-routing.module");
var modals_component_1 = require("./modals/modals.component");
var modal_component_1 = require("./modals/modal/modal.component");
var bootstrap_component_1 = require("./bootstrap.component");
var buttons_module_1 = require("./buttons/buttons.module");
var form_inputs_component_1 = require("./form-inputs/form-inputs.component");
var COMPONENTS = [
    bootstrap_component_1.BootstrapComponent,
    modals_component_1.ModalsComponent,
    modal_component_1.ModalComponent,
    form_inputs_component_1.FormInputsComponent,
];
var ENTRY_COMPONENTS = [
    modal_component_1.ModalComponent,
];
var BootstrapModule = /** @class */ (function () {
    function BootstrapModule() {
    }
    BootstrapModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                bootstrap_routing_module_1.BootstrapRoutingModule,
                buttons_module_1.ButtonsModule,
            ],
            declarations: COMPONENTS.slice(),
            entryComponents: ENTRY_COMPONENTS.slice(),
        })
    ], BootstrapModule);
    return BootstrapModule;
}());
exports.BootstrapModule = BootstrapModule;
//# sourceMappingURL=bootstrap.module.js.map