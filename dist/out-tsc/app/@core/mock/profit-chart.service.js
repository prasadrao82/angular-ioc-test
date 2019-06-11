"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var periods_service_1 = require("./periods.service");
var profit_chart_1 = require("../data/profit-chart");
var ProfitChartService = /** @class */ (function (_super) {
    tslib_1.__extends(ProfitChartService, _super);
    function ProfitChartService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    ProfitChartService.prototype.getDataForWeekPeriod = function () {
        var nPoint = this.period.getWeeks().length;
        return {
            chartLabel: this.period.getWeeks(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    ProfitChartService.prototype.getDataForMonthPeriod = function () {
        var nPoint = this.period.getMonths().length;
        return {
            chartLabel: this.period.getMonths(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    ProfitChartService.prototype.getDataForYearPeriod = function () {
        var nPoint = this.year.length;
        return {
            chartLabel: this.year,
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    };
    ProfitChartService.prototype.getRandomData = function (nPoints) {
        return Array.from(Array(nPoints)).map(function () {
            return Math.round(Math.random() * 500);
        });
    };
    ProfitChartService.prototype.getProfitChartData = function (period) {
        return this.data[period];
    };
    ProfitChartService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [periods_service_1.PeriodsService])
    ], ProfitChartService);
    return ProfitChartService;
}(profit_chart_1.ProfitChartData));
exports.ProfitChartService = ProfitChartService;
//# sourceMappingURL=profit-chart.service.js.map