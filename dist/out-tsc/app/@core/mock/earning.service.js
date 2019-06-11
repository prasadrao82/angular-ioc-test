"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var earning_1 = require("../data/earning");
var EarningService = /** @class */ (function (_super) {
    tslib_1.__extends(EarningService, _super);
    function EarningService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentDate = new Date();
        _this.currentValue = Math.random() * 1000;
        _this.ONE_DAY = 24 * 3600 * 1000;
        _this.pieChartData = [
            {
                value: 50,
                name: 'Bitcoin',
            },
            {
                value: 25,
                name: 'Tether',
            },
            {
                value: 25,
                name: 'Ethereum',
            },
        ];
        _this.liveUpdateChartData = {
            bitcoin: {
                liveChart: [],
                delta: {
                    up: true,
                    value: 4,
                },
                dailyIncome: 45895,
            },
            tether: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 9,
                },
                dailyIncome: 5862,
            },
            ethereum: {
                liveChart: [],
                delta: {
                    up: false,
                    value: 21,
                },
                dailyIncome: 584,
            },
        };
        return _this;
    }
    EarningService.prototype.getDefaultLiveChartData = function (elementsNumber) {
        var _this = this;
        this.currentDate = new Date();
        this.currentValue = Math.random() * 1000;
        return Array.from(Array(elementsNumber))
            .map(function (item) { return _this.generateRandomLiveChartData(); });
    };
    EarningService.prototype.generateRandomLiveChartData = function () {
        this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
        this.currentValue = this.currentValue + Math.random() * 20 - 11;
        if (this.currentValue < 0) {
            this.currentValue = Math.random() * 100;
        }
        return {
            value: [
                [
                    this.currentDate.getFullYear(),
                    this.currentDate.getMonth(),
                    this.currentDate.getDate(),
                ].join('/'),
                Math.round(this.currentValue),
            ],
        };
    };
    EarningService.prototype.getEarningLiveUpdateCardData = function (currency) {
        var data = this.liveUpdateChartData[currency.toLowerCase()];
        var newValue = this.generateRandomLiveChartData();
        data.liveChart.shift();
        data.liveChart.push(newValue);
        return rxjs_1.of(data.liveChart);
    };
    EarningService.prototype.getEarningCardData = function (currency) {
        var data = this.liveUpdateChartData[currency.toLowerCase()];
        data.liveChart = this.getDefaultLiveChartData(150);
        return rxjs_1.of(data);
    };
    EarningService.prototype.getEarningPieChartData = function () {
        return rxjs_1.of(this.pieChartData);
    };
    EarningService = tslib_1.__decorate([
        core_1.Injectable()
    ], EarningService);
    return EarningService;
}(earning_1.EarningData));
exports.EarningService = EarningService;
//# sourceMappingURL=earning.service.js.map