"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var orders_chart_1 = require("../data/orders-chart");
var orders_profit_chart_1 = require("../data/orders-profit-chart");
var profit_chart_1 = require("../data/profit-chart");
var OrdersProfitChartService = /** @class */ (function (_super) {
    tslib_1.__extends(OrdersProfitChartService, _super);
    function OrdersProfitChartService(ordersChartService, profitChartService) {
        var _this = _super.call(this) || this;
        _this.ordersChartService = ordersChartService;
        _this.profitChartService = profitChartService;
        _this.summary = [
            {
                title: 'Marketplace',
                value: 3654,
            },
            {
                title: 'Last Month',
                value: 946,
            },
            {
                title: 'Last Week',
                value: 654,
            },
            {
                title: 'Today',
                value: 230,
            },
        ];
        return _this;
    }
    OrdersProfitChartService.prototype.getOrderProfitChartSummary = function () {
        return rxjs_1.of(this.summary);
    };
    OrdersProfitChartService.prototype.getOrdersChartData = function (period) {
        return rxjs_1.of(this.ordersChartService.getOrdersChartData(period));
    };
    OrdersProfitChartService.prototype.getProfitChartData = function (period) {
        return rxjs_1.of(this.profitChartService.getProfitChartData(period));
    };
    OrdersProfitChartService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [orders_chart_1.OrdersChartData,
            profit_chart_1.ProfitChartData])
    ], OrdersProfitChartService);
    return OrdersProfitChartService;
}(orders_profit_chart_1.OrdersProfitChartData));
exports.OrdersProfitChartService = OrdersProfitChartService;
//# sourceMappingURL=orders-profit-chart.service.js.map