"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var layout_service_1 = require("../../../../@core/utils/layout.service");
var EarningLiveUpdateChartComponent = /** @class */ (function () {
    function EarningLiveUpdateChartComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    EarningLiveUpdateChartComponent.prototype.ngOnChanges = function () {
        if (this.option) {
            this.updateChartOptions(this.liveUpdateChartData);
        }
    };
    EarningLiveUpdateChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.delay(1), operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (config) {
            var earningLineTheme = config.variables.earningLine;
            _this.setChartOption(earningLineTheme);
        });
    };
    EarningLiveUpdateChartComponent.prototype.setChartOption = function (earningLineTheme) {
        this.option = {
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
            },
            xAxis: {
                type: 'time',
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
            yAxis: {
                boundaryGap: [0, '5%'],
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
            tooltip: {
                axisPointer: {
                    type: 'shadow',
                },
                textStyle: {
                    color: earningLineTheme.tooltipTextColor,
                    fontWeight: earningLineTheme.tooltipFontWeight,
                    fontSize: earningLineTheme.tooltipFontSize,
                },
                position: 'top',
                backgroundColor: earningLineTheme.tooltipBg,
                borderColor: earningLineTheme.tooltipBorderColor,
                borderWidth: earningLineTheme.tooltipBorderWidth,
                formatter: function (params) { return "$ " + Math.round(parseInt(params.value[1], 10)); },
                extraCssText: earningLineTheme.tooltipExtraCss,
            },
            series: [
                {
                    type: 'line',
                    symbol: 'circle',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            opacity: 0,
                        },
                        emphasis: {
                            opacity: 0,
                        },
                    },
                    lineStyle: {
                        normal: {
                            width: 0,
                        },
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: earningLineTheme.gradFrom,
                                }, {
                                    offset: 1,
                                    color: earningLineTheme.gradTo,
                                }]),
                            opacity: 1,
                        },
                    },
                    data: this.liveUpdateChartData,
                },
            ],
            animation: true,
        };
    };
    EarningLiveUpdateChartComponent.prototype.updateChartOptions = function (chartData) {
        this.echartsInstance.setOption({
            series: [{
                    data: chartData,
                }],
        });
    };
    EarningLiveUpdateChartComponent.prototype.onChartInit = function (ec) {
        this.echartsInstance = ec;
    };
    EarningLiveUpdateChartComponent.prototype.resizeChart = function () {
        if (this.echartsInstance) {
            this.echartsInstance.resize();
        }
    };
    EarningLiveUpdateChartComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], EarningLiveUpdateChartComponent.prototype, "liveUpdateChartData", void 0);
    EarningLiveUpdateChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-earning-live-update-chart',
            styleUrls: ['earning-card-front.component.scss'],
            template: "\n    <div echarts\n         class=\"echart\"\n         [options]=\"option\"\n         (chartInit)=\"onChartInit($event)\"></div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            layout_service_1.LayoutService])
    ], EarningLiveUpdateChartComponent);
    return EarningLiveUpdateChartComponent;
}());
exports.EarningLiveUpdateChartComponent = EarningLiveUpdateChartComponent;
//# sourceMappingURL=earning-live-update-chart.component.js.map