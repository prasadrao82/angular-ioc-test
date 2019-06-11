"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_module_1 = require("../../@theme/theme.module");
var miscellaneous_routing_module_1 = require("./miscellaneous-routing.module");
var MiscellaneousModule = /** @class */ (function () {
    function MiscellaneousModule() {
    }
    MiscellaneousModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                miscellaneous_routing_module_1.MiscellaneousRoutingModule,
            ],
            declarations: miscellaneous_routing_module_1.routedComponents.slice(),
        })
    ], MiscellaneousModule);
    return MiscellaneousModule;
}());
exports.MiscellaneousModule = MiscellaneousModule;
//# sourceMappingURL=miscellaneous.module.js.map