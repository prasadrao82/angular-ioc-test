"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var layout_service_1 = require("../../../../@core/utils/layout.service");
var CountryOrdersChartComponent = /** @class */ (function () {
    function CountryOrdersChartComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.option = {};
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    CountryOrdersChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.data && !changes.data.isFirstChange()) {
            this.echartsInstance.setOption({
                series: [
                    {
                        data: this.data.map(function (v) { return _this.maxValue; }),
                    },
                    {
                        data: this.data,
                    },
                    {
                        data: this.data,
                    },
                ],
            });
        }
    };
    CountryOrdersChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (config) {
            var countriesTheme = config.variables.countryOrders;
            _this.option = Object.assign({}, {
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true,
                },
                xAxis: {
                    axisLabel: {
                        color: countriesTheme.chartAxisTextColor,
                        fontSize: countriesTheme.chartAxisFontSize,
                    },
                    axisLine: {
                        lineStyle: {
                            color: countriesTheme.chartAxisLineColor,
                            width: '2',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        lineStyle: {
                            color: countriesTheme.chartAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                yAxis: {
                    data: _this.labels,
                    axisLabel: {
                        color: countriesTheme.chartAxisTextColor,
                        fontSize: countriesTheme.chartAxisFontSize,
                    },
                    axisLine: {
                        lineStyle: {
                            color: countriesTheme.chartAxisLineColor,
                            width: '2',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                },
                series: [
                    {
                        type: 'bar',
                        data: _this.data.map(function (v) { return _this.maxValue; }),
                        cursor: 'default',
                        itemStyle: {
                            normal: {
                                color: countriesTheme.chartInnerLineColor,
                            },
                            opacity: 1,
                        },
                        barWidth: '40%',
                        barGap: '-100%',
                        barCategoryGap: '30%',
                        animation: false,
                        z: 1,
                    },
                    {
                        type: 'bar',
                        data: _this.data,
                        cursor: 'default',
                        itemStyle: {
                            normal: {
                                color: countriesTheme.chartLineBottomShadowColor,
                            },
                            opacity: 1,
                        },
                        barWidth: '40%',
                        barGap: '-100%',
                        barCategoryGap: '30%',
                        z: 2,
                    },
                    {
                        type: 'bar',
                        barWidth: '35%',
                        data: _this.data,
                        cursor: 'default',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                        offset: 0,
                                        color: countriesTheme.chartGradientFrom,
                                    }, {
                                        offset: 1,
                                        color: countriesTheme.chartGradientTo,
                                    }]),
                            },
                        },
                        z: 3,
                    },
                ],
            });
        });
    };
    CountryOrdersChartComponent.prototype.onChartInit = function (ec) {
        this.echartsInstance = ec;
    };
    CountryOrdersChartComponent.prototype.resizeChart = function () {
        if (this.echartsInstance) {
            this.echartsInstance.resize();
        }
    };
    CountryOrdersChartComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CountryOrdersChartComponent.prototype, "countryName", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], CountryOrdersChartComponent.prototype, "data", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], CountryOrdersChartComponent.prototype, "maxValue", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], CountryOrdersChartComponent.prototype, "labels", void 0);
    CountryOrdersChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-country-orders-chart',
            styleUrls: ['./country-orders-chart.component.scss'],
            template: "\n    <div class=\"header\">\n      <span class=\"title\">Selected Country/Region</span>\n      <h2>{{countryName}}</h2>\n    </div>\n    <div echarts\n         [options]=\"option\"\n         class=\"echart\"\n         (chartInit)=\"onChartInit($event)\">\n    </div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            layout_service_1.LayoutService])
    ], CountryOrdersChartComponent);
    return CountryOrdersChartComponent;
}());
exports.CountryOrdersChartComponent = CountryOrdersChartComponent;
//# sourceMappingURL=country-orders-chart.component.js.map