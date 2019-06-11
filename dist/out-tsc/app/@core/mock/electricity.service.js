"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var electricity_1 = require("../data/electricity");
require("rxjs/add/operator/map");
var ElectricityService = /** @class */ (function (_super) {
    tslib_1.__extends(ElectricityService, _super);
    function ElectricityService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.chartPoints = [
            490, 490, 495, 500,
            505, 510, 520, 530,
            550, 580, 630, 720,
            800, 840, 860, 870,
            870, 860, 840, 800,
            720, 200, 145, 130,
            130, 145, 200, 570,
            635, 660, 670, 670,
            660, 630, 580, 460,
            380, 350, 340, 340,
            340, 340, 340, 340,
            340, 340, 340,
        ];
        _this.chartData = _this.chartPoints.map(function (p, index) { return ({
            label: (index % 5 === 3) ? "" + Math.round(index / 5) : '',
            value: p,
        }); });
        _this.actionUrl = 'http://localhost:8081/listusers';
        return _this;
    }
    ElectricityService.prototype.getListData = function () {
        this.listData = this.http.get(this.actionUrl);
        return this.listData;
    };
    ElectricityService.prototype.getChartData = function () {
        return rxjs_1.of(this.chartData);
    };
    ElectricityService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], ElectricityService);
    return ElectricityService;
}(electricity_1.ElectricityData));
exports.ElectricityService = ElectricityService;
//# sourceMappingURL=electricity.service.js.map