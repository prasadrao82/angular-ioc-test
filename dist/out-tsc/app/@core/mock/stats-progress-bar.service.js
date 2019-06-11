"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var stats_progress_bar_1 = require("../data/stats-progress-bar");
var StatsProgressBarService = /** @class */ (function (_super) {
    tslib_1.__extends(StatsProgressBarService, _super);
    function StatsProgressBarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressInfoData = [
            {
                title: 'Today’s Profit',
                value: 572900,
                activeProgress: 70,
                description: 'Better than last week (70%)',
            },
            {
                title: 'New Orders',
                value: 6378,
                activeProgress: 30,
                description: 'Better than last week (30%)',
            },
            {
                title: 'New Comments',
                value: 200,
                activeProgress: 55,
                description: 'Better than last week (55%)',
            },
        ];
        return _this;
    }
    StatsProgressBarService.prototype.getProgressInfoData = function () {
        return rxjs_1.of(this.progressInfoData);
    };
    StatsProgressBarService = tslib_1.__decorate([
        core_1.Injectable()
    ], StatsProgressBarService);
    return StatsProgressBarService;
}(stats_progress_bar_1.StatsProgressBarData));
exports.StatsProgressBarService = StatsProgressBarService;
//# sourceMappingURL=stats-progress-bar.service.js.map