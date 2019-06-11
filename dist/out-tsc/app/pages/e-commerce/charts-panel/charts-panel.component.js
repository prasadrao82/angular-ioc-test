"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var orders_chart_component_1 = require("./charts/orders-chart.component");
var profit_chart_component_1 = require("./charts/profit-chart.component");
var orders_profit_chart_1 = require("../../../@core/data/orders-profit-chart");
var ECommerceChartsPanelComponent = /** @class */ (function () {
    function ECommerceChartsPanelComponent(ordersProfitChartService) {
        var _this = this;
        this.ordersProfitChartService = ordersProfitChartService;
        this.alive = true;
        this.period = 'week';
        this.ordersProfitChartService.getOrderProfitChartSummary()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (summary) {
            _this.chartPanelSummary = summary;
        });
        this.getOrdersChartData(this.period);
        this.getProfitChartData(this.period);
    }
    ECommerceChartsPanelComponent.prototype.setPeriodAndGetChartData = function (value) {
        if (this.period !== value) {
            this.period = value;
        }
        this.getOrdersChartData(value);
        this.getProfitChartData(value);
    };
    ECommerceChartsPanelComponent.prototype.changeTab = function (selectedTab) {
        if (selectedTab.tabTitle === 'Profit') {
            this.profitChart.resizeChart();
        }
        else {
            this.ordersChart.resizeChart();
        }
    };
    ECommerceChartsPanelComponent.prototype.getOrdersChartData = function (period) {
        var _this = this;
        this.ordersProfitChartService.getOrdersChartData(period)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (ordersChartData) {
            _this.ordersChartData = ordersChartData;
        });
    };
    ECommerceChartsPanelComponent.prototype.getProfitChartData = function (period) {
        var _this = this;
        this.ordersProfitChartService.getProfitChartData(period)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (profitChartData) {
            _this.profitChartData = profitChartData;
        });
    };
    ECommerceChartsPanelComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.ViewChild('ordersChart'),
        tslib_1.__metadata("design:type", orders_chart_component_1.OrdersChartComponent)
    ], ECommerceChartsPanelComponent.prototype, "ordersChart", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('profitChart'),
        tslib_1.__metadata("design:type", profit_chart_component_1.ProfitChartComponent)
    ], ECommerceChartsPanelComponent.prototype, "profitChart", void 0);
    ECommerceChartsPanelComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-ecommerce-charts',
            styleUrls: ['./charts-panel.component.scss'],
            templateUrl: './charts-panel.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [orders_profit_chart_1.OrdersProfitChartData])
    ], ECommerceChartsPanelComponent);
    return ECommerceChartsPanelComponent;
}());
exports.ECommerceChartsPanelComponent = ECommerceChartsPanelComponent;
//# sourceMappingURL=charts-panel.component.js.map