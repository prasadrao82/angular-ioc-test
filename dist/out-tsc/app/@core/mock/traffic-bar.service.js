"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var periods_service_1 = require("./periods.service");
var traffic_bar_1 = require("../data/traffic-bar");
var TrafficBarService = /** @class */ (function (_super) {
    tslib_1.__extends(TrafficBarService, _super);
    function TrafficBarService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.data = {};
        _this.data = {
            week: _this.getDataForWeekPeriod(),
            month: _this.getDataForMonthPeriod(),
            year: _this.getDataForYearPeriod(),
        };
        return _this;
    }
    TrafficBarService.prototype.getDataForWeekPeriod = function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    };
    TrafficBarService.prototype.getDataForMonthPeriod = function () {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    };
    TrafficBarService.prototype.getDataForYearPeriod = function () {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    };
    TrafficBarService.prototype.getTrafficBarData = function (period) {
        return rxjs_1.of(this.data[period]);
    };
    TrafficBarService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [periods_service_1.PeriodsService])
    ], TrafficBarService);
    return TrafficBarService;
}(traffic_bar_1.TrafficBarData));
exports.TrafficBarService = TrafficBarService;
//# sourceMappingURL=traffic-bar.service.js.map