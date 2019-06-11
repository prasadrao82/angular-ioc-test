"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var periods_service_1 = require("./periods.service");
var traffic_list_1 = require("../data/traffic-list");
var TrafficListService = /** @class */ (function (_super) {
    tslib_1.__extends(TrafficListService, _super);
    function TrafficListService(period) {
        var _this = _super.call(this) || this;
        _this.period = period;
        _this.getRandom = function (roundTo) { return Math.round(Math.random() * roundTo); };
        _this.data = {};
        _this.data = {
            week: _this.getDataWeek(),
            month: _this.getDataMonth(),
            year: _this.getDataYear(),
        };
        return _this;
    }
    TrafficListService.prototype.getDataWeek = function () {
        var _this = this;
        var getFirstDateInPeriod = function () {
            var weeks = _this.period.getWeeks();
            return weeks[weeks.length - 1];
        };
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    };
    TrafficListService.prototype.getDataMonth = function () {
        var _this = this;
        var getFirstDateInPeriod = function () {
            var months = _this.period.getMonths();
            var date = new Date();
            var prevYear = date.getFullYear() - 1;
            return months[months.length - 1] + ", " + prevYear;
        };
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    };
    TrafficListService.prototype.getDataYear = function () {
        var _this = this;
        var getFirstDateInPeriod = function () {
            var years = _this.period.getYears();
            return "" + (parseInt(years[0], 10) - 1);
        };
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    };
    TrafficListService.prototype.reduceData = function (timePeriods, getFirstDateInPeriod) {
        var _this = this;
        return timePeriods.reduce(function (result, timePeriod, index) {
            var hasResult = result[index - 1];
            var prevDate = hasResult ?
                result[index - 1].comparison.nextDate :
                getFirstDateInPeriod();
            var prevValue = hasResult ?
                result[index - 1].comparison.nextValue :
                _this.getRandom(100);
            var nextValue = _this.getRandom(100);
            var deltaValue = prevValue - nextValue;
            var item = {
                date: timePeriod,
                value: _this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate: prevDate,
                    prevValue: prevValue,
                    nextDate: timePeriod,
                    nextValue: nextValue,
                },
            };
            return result.concat([item]);
        }, []);
    };
    TrafficListService.prototype.getTrafficListData = function (period) {
        return rxjs_1.of(this.data[period]);
    };
    TrafficListService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [periods_service_1.PeriodsService])
    ], TrafficListService);
    return TrafficListService;
}(traffic_list_1.TrafficListData));
exports.TrafficListService = TrafficListService;
//# sourceMappingURL=traffic-list.service.js.map