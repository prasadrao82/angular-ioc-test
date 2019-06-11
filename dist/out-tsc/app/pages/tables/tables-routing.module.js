"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var tables_component_1 = require("./tables.component");
var smart_table_component_1 = require("./smart-table/smart-table.component");
var routes = [{
        path: '',
        component: tables_component_1.TablesComponent,
        children: [{
                path: 'smart-table',
                component: smart_table_component_1.SmartTableComponent,
            }],
    }];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());
exports.TablesRoutingModule = TablesRoutingModule;
exports.routedComponents = [
    tables_component_1.TablesComponent,
    smart_table_component_1.SmartTableComponent,
];
//# sourceMappingURL=tables-routing.module.js.map