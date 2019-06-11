"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var stats_progress_bar_1 = require("../../../@core/data/stats-progress-bar");
var operators_1 = require("rxjs/operators");
var ECommerceProgressSectionComponent = /** @class */ (function () {
    function ECommerceProgressSectionComponent(statsProgressBarService) {
        var _this = this;
        this.statsProgressBarService = statsProgressBarService;
        this.alive = true;
        this.statsProgressBarService.getProgressInfoData()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            _this.progressInfoData = data;
        });
    }
    ECommerceProgressSectionComponent.prototype.ngOnDestroy = function () {
        this.alive = true;
    };
    ECommerceProgressSectionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-progress-section',
            styleUrls: ['./progress-section.component.scss'],
            templateUrl: './progress-section.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [stats_progress_bar_1.StatsProgressBarData])
    ], ECommerceProgressSectionComponent);
    return ECommerceProgressSectionComponent;
}());
exports.ECommerceProgressSectionComponent = ECommerceProgressSectionComponent;
//# sourceMappingURL=progress-section.component.js.map