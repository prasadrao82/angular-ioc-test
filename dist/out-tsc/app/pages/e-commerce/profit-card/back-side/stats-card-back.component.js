"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var stats_bar_1 = require("../../../../@core/data/stats-bar");
var operators_1 = require("rxjs/operators");
var StatsCardBackComponent = /** @class */ (function () {
    function StatsCardBackComponent(statsBarData) {
        var _this = this;
        this.statsBarData = statsBarData;
        this.alive = true;
        this.statsBarData.getStatsBarData()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            _this.chartData = data;
        });
    }
    StatsCardBackComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    StatsCardBackComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-stats-card-back',
            styleUrls: ['./stats-card-back.component.scss'],
            templateUrl: './stats-card-back.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [stats_bar_1.StatsBarData])
    ], StatsCardBackComponent);
    return StatsCardBackComponent;
}());
exports.StatsCardBackComponent = StatsCardBackComponent;
//# sourceMappingURL=stats-card-back.component.js.map