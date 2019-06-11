"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var periods_service_1 = require("./periods.service");
var visitors_analytics_1 = require("../data/visitors-analytics");
var VisitorsAnalyticsService = /** @class */ (function (_super) {
    tslib_1.__extends(VisitorsAnalyticsService, _super);
    function VisitorsAnalyticsService(periodService) {
        var _this = _super.call(this) || this;
        _this.periodService = periodService;
        _this.pieChartValue = 75;
        _this.innerLinePoints = [
            94, 188, 225, 244, 253, 254, 249, 235, 208,
            173, 141, 118, 105, 97, 94, 96, 104, 121, 147,
            183, 224, 265, 302, 333, 358, 375, 388, 395,
            400, 400, 397, 390, 377, 360, 338, 310, 278,
            241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9,
        ];
        _this.outerLinePoints = [
            85, 71, 59, 50, 45, 42, 41, 44, 58, 88,
            136, 199, 267, 326, 367, 391, 400, 397,
            376, 319, 200, 104, 60, 41, 36, 37, 44,
            55, 74, 100, 131, 159, 180, 193, 199, 200,
            195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11,
        ];
        return _this;
    }
    VisitorsAnalyticsService.prototype.generateOutlineLineData = function () {
        var months = this.periodService.getMonths();
        var outerLinePointsLength = this.outerLinePoints.length;
        var monthsLength = months.length;
        return this.outerLinePoints.map(function (p, index) {
            var monthIndex = Math.round(index / 4);
            var label = (index % Math.round(outerLinePointsLength / monthsLength) === 0)
                ? months[monthIndex]
                : '';
            return {
                label: label,
                value: p,
            };
        });
    };
    VisitorsAnalyticsService.prototype.getInnerLineChartData = function () {
        return rxjs_1.of(this.innerLinePoints);
    };
    VisitorsAnalyticsService.prototype.getOutlineLineChartData = function () {
        return rxjs_1.of(this.generateOutlineLineData());
    };
    VisitorsAnalyticsService.prototype.getPieChartData = function () {
        return rxjs_1.of(this.pieChartValue);
    };
    VisitorsAnalyticsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [periods_service_1.PeriodsService])
    ], VisitorsAnalyticsService);
    return VisitorsAnalyticsService;
}(visitors_analytics_1.VisitorsAnalyticsData));
exports.VisitorsAnalyticsService = VisitorsAnalyticsService;
//# sourceMappingURL=visitors-analytics.service.js.map