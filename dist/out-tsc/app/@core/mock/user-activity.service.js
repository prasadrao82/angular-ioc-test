"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var periods_service_1 = require("./periods.service");
var user_activity_1 = require("../data/user-activity");
var UserActivityService = /** @class */ (function (_super) {
    tslib_1.__extends(UserActivityService, _super);
    function UserActivityService(periods) {
        var _this = _super.call(this) || this;
        _this.periods = periods;
        _this.getRandom = function (roundTo) { return Math.round(Math.random() * roundTo); };
        _this.data = {};
        _this.data = {
            week: _this.getDataWeek(),
            month: _this.getDataMonth(),
            year: _this.getDataYear(),
        };
        return _this;
    }
    UserActivityService.prototype.generateUserActivityRandomData = function (date) {
        return {
            date: date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    };
    UserActivityService.prototype.getDataWeek = function () {
        var _this = this;
        return this.periods.getWeeks().map(function (week) {
            return _this.generateUserActivityRandomData(week);
        });
    };
    UserActivityService.prototype.getDataMonth = function () {
        var _this = this;
        var currentDate = new Date();
        var days = currentDate.getDate();
        var month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map(function (_, index) {
            var date = index + 1 + " " + month;
            return _this.generateUserActivityRandomData(date);
        });
    };
    UserActivityService.prototype.getDataYear = function () {
        var _this = this;
        return this.periods.getYears().map(function (year) {
            return _this.generateUserActivityRandomData(year);
        });
    };
    UserActivityService.prototype.getUserActivityData = function (period) {
        return rxjs_1.of(this.data[period]);
    };
    UserActivityService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [periods_service_1.PeriodsService])
    ], UserActivityService);
    return UserActivityService;
}(user_activity_1.UserActivityData));
exports.UserActivityService = UserActivityService;
//# sourceMappingURL=user-activity.service.js.map