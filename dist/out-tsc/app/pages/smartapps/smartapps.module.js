"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_module_1 = require("../../@theme/theme.module");
var smartapps_routing_module_1 = require("./smartapps-routing.module");
var SmartappsModule = /** @class */ (function () {
    function SmartappsModule() {
    }
    SmartappsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                smartapps_routing_module_1.SmartappsRoutingModule,
            ],
            declarations: smartapps_routing_module_1.routedComponents.slice(),
        })
    ], SmartappsModule);
    return SmartappsModule;
}());
exports.SmartappsModule = SmartappsModule;
//# sourceMappingURL=smartapps.module.js.map