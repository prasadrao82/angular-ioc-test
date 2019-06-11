"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var theme_module_1 = require("../../@theme/theme.module");
var tables_routing_module_1 = require("./tables-routing.module");
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                tables_routing_module_1.TablesRoutingModule,
                ng2_smart_table_1.Ng2SmartTableModule,
            ],
            declarations: tables_routing_module_1.routedComponents.slice(),
        })
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map