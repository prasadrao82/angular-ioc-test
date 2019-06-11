"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var traffic_chart_1 = require("../data/traffic-chart");
var TrafficChartService = /** @class */ (function (_super) {
    tslib_1.__extends(TrafficChartService, _super);
    function TrafficChartService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
        return _this;
    }
    TrafficChartService.prototype.getTrafficChartData = function () {
        return rxjs_1.of(this.data);
    };
    TrafficChartService = tslib_1.__decorate([
        core_1.Injectable()
    ], TrafficChartService);
    return TrafficChartService;
}(traffic_chart_1.TrafficChartData));
exports.TrafficChartService = TrafficChartService;
//# sourceMappingURL=traffic-chart.service.js.map