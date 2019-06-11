"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var profit_bar_animation_chart_1 = require("../../../../@core/data/profit-bar-animation-chart");
var operators_1 = require("rxjs/operators");
var StatsCardFrontComponent = /** @class */ (function () {
    function StatsCardFrontComponent(profitBarAnimationChartService) {
        var _this = this;
        this.profitBarAnimationChartService = profitBarAnimationChartService;
        this.alive = true;
        this.profitBarAnimationChartService.getChartData()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (linesData) {
            _this.linesData = linesData;
        });
    }
    StatsCardFrontComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-stats-card-front',
            styleUrls: ['./stats-card-front.component.scss'],
            templateUrl: './stats-card-front.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [profit_bar_animation_chart_1.ProfitBarAnimationChartData])
    ], StatsCardFrontComponent);
    return StatsCardFrontComponent;
}());
exports.StatsCardFrontComponent = StatsCardFrontComponent;
//# sourceMappingURL=stats-card-front.component.js.map