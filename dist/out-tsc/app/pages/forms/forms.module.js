"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_module_1 = require("../../@theme/theme.module");
var forms_routing_module_1 = require("./forms-routing.module");
var buttons_module_1 = require("./buttons/buttons.module");
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                forms_routing_module_1.FormsRoutingModule,
                buttons_module_1.ButtonsModule,
            ],
            declarations: forms_routing_module_1.routedComponents.slice(),
        })
    ], FormsModule);
    return FormsModule;
}());
exports.FormsModule = FormsModule;
//# sourceMappingURL=forms.module.js.map