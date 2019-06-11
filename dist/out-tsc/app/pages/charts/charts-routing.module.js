"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var charts_component_1 = require("./charts.component");
var echarts_component_1 = require("./echarts/echarts.component");
var d3_component_1 = require("./d3/d3.component");
var chartjs_component_1 = require("./chartjs/chartjs.component");
var routes = [{
        path: '',
        component: charts_component_1.ChartsComponent,
        children: [{
                path: 'echarts',
                component: echarts_component_1.EchartsComponent,
            }, {
                path: 'd3',
                component: d3_component_1.D3Component,
            }, {
                path: 'chartjs',
                component: chartjs_component_1.ChartjsComponent,
            }],
    }];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());
exports.ChartsRoutingModule = ChartsRoutingModule;
exports.routedComponents = [
    charts_component_1.ChartsComponent,
    echarts_component_1.EchartsComponent,
    d3_component_1.D3Component,
    chartjs_component_1.ChartjsComponent,
];
//# sourceMappingURL=charts-routing.module.js.map