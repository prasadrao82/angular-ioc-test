"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var profit_bar_animation_chart_1 = require("../data/profit-bar-animation-chart");
var ProfitBarAnimationChartService = /** @class */ (function (_super) {
    tslib_1.__extends(ProfitBarAnimationChartService, _super);
    function ProfitBarAnimationChartService() {
        var _this = _super.call(this) || this;
        _this.data = {
            firstLine: _this.getDataForFirstLine(),
            secondLine: _this.getDataForSecondLine(),
        };
        return _this;
    }
    ProfitBarAnimationChartService.prototype.getDataForFirstLine = function () {
        return this.createEmptyArray(100)
            .map(function (_, index) {
            var oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    };
    ProfitBarAnimationChartService.prototype.getDataForSecondLine = function () {
        return this.createEmptyArray(100)
            .map(function (_, index) {
            var oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    };
    ProfitBarAnimationChartService.prototype.createEmptyArray = function (nPoints) {
        return Array.from(Array(nPoints));
    };
    ProfitBarAnimationChartService.prototype.getChartData = function () {
        return rxjs_1.of(this.data);
    };
    ProfitBarAnimationChartService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProfitBarAnimationChartService);
    return ProfitBarAnimationChartService;
}(profit_bar_animation_chart_1.ProfitBarAnimationChartData));
exports.ProfitBarAnimationChartService = ProfitBarAnimationChartService;
//# sourceMappingURL=profit-bar-animation-chart.service.js.map