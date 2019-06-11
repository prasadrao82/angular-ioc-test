"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
// modules
var theme_module_1 = require("../../@theme/theme.module");
var modal_overlays_routing_module_1 = require("./modal-overlays-routing.module");
// components
var modal_overlays_component_1 = require("./modal-overlays.component");
var dialog_component_1 = require("./dialog/dialog.component");
var showcase_dialog_component_1 = require("./dialog/showcase-dialog/showcase-dialog.component");
var theme_1 = require("@nebular/theme");
var dialog_name_prompt_component_1 = require("./dialog/dialog-name-prompt/dialog-name-prompt.component");
var window_component_1 = require("./window/window.component");
var window_form_component_1 = require("./window/window-form/window-form.component");
var toastr_component_1 = require("./toastr/toastr.component");
var popovers_component_1 = require("./popovers/popovers.component");
var popover_examples_component_1 = require("./popovers/popover-examples.component");
var tooltip_component_1 = require("./tooltip/tooltip.component");
var COMPONENTS = [
    modal_overlays_component_1.ModalOverlaysComponent,
    toastr_component_1.ToastrComponent,
    dialog_component_1.DialogComponent,
    showcase_dialog_component_1.ShowcaseDialogComponent,
    dialog_name_prompt_component_1.DialogNamePromptComponent,
    window_component_1.WindowComponent,
    window_form_component_1.WindowFormComponent,
    popovers_component_1.PopoversComponent,
    popover_examples_component_1.NgxPopoverCardComponent,
    popover_examples_component_1.NgxPopoverFormComponent,
    popover_examples_component_1.NgxPopoverTabsComponent,
    tooltip_component_1.TooltipComponent,
];
var ENTRY_COMPONENTS = [
    showcase_dialog_component_1.ShowcaseDialogComponent,
    dialog_name_prompt_component_1.DialogNamePromptComponent,
    window_form_component_1.WindowFormComponent,
    popover_examples_component_1.NgxPopoverCardComponent,
    popover_examples_component_1.NgxPopoverFormComponent,
    popover_examples_component_1.NgxPopoverTabsComponent,
];
var MODULES = [
    theme_module_1.ThemeModule,
    modal_overlays_routing_module_1.ModalOverlaysRoutingModule,
    theme_1.NbDialogModule.forChild(),
    theme_1.NbWindowModule.forChild(),
];
var SERVICES = [];
var ModalOverlaysModule = /** @class */ (function () {
    function ModalOverlaysModule() {
    }
    ModalOverlaysModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            declarations: COMPONENTS.slice(),
            providers: SERVICES.slice(),
            entryComponents: ENTRY_COMPONENTS.slice(),
        })
    ], ModalOverlaysModule);
    return ModalOverlaysModule;
}());
exports.ModalOverlaysModule = ModalOverlaysModule;
//# sourceMappingURL=modal-overlays.module.js.map