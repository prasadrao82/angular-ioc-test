"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var stats_bar_1 = require("../data/stats-bar");
var StatsBarService = /** @class */ (function (_super) {
    tslib_1.__extends(StatsBarService, _super);
    function StatsBarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
        return _this;
    }
    StatsBarService.prototype.getStatsBarData = function () {
        return rxjs_1.of(this.statsBarData);
    };
    StatsBarService = tslib_1.__decorate([
        core_1.Injectable()
    ], StatsBarService);
    return StatsBarService;
}(stats_bar_1.StatsBarData));
exports.StatsBarService = StatsBarService;
//# sourceMappingURL=stats-bar.service.js.map