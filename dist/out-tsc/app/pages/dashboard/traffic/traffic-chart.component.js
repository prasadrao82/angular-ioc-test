"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var utils_1 = require("../../../@core/utils");
var TrafficChartComponent = /** @class */ (function () {
    function TrafficChartComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.option = {};
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    TrafficChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.delay(1), operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (config) {
            var trafficTheme = config.variables.traffic;
            _this.option = Object.assign({}, {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: _this.points,
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
                        show: true,
                        lineStyle: {
                            color: trafficTheme.colorBlack,
                            opacity: 0.06,
                            width: '1',
                        },
                    },
                },
                tooltip: {
                    axisPointer: {
                        type: 'shadow',
                    },
                    textStyle: {
                        color: trafficTheme.tooltipTextColor,
                        fontWeight: trafficTheme.tooltipFontWeight,
                        fontSize: 16,
                    },
                    position: 'top',
                    backgroundColor: trafficTheme.tooltipBg,
                    borderColor: trafficTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} MB',
                    extraCssText: trafficTheme.tooltipExtraCss,
                },
                series: [
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 8,
                        sampling: 'average',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: trafficTheme.shadowLineDarkBg,
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)',
                                borderWidth: 0,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.shadowLineDarkBg,
                            },
                        },
                        data: _this.points.map(function (p) { return p - 15; }),
                    },
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 6,
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: trafficTheme.itemColor,
                                borderColor: trafficTheme.itemBorderColor,
                                borderWidth: 2,
                            },
                            emphasis: {
                                color: 'white',
                                borderColor: trafficTheme.itemEmphasisBorderColor,
                                borderWidth: 2,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.lineBg,
                                shadowColor: trafficTheme.lineBg,
                                shadowBlur: trafficTheme.lineShadowBlur,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: trafficTheme.gradFrom,
                                    }, {
                                        offset: 1,
                                        color: trafficTheme.gradTo,
                                    }]),
                                opacity: 1,
                            },
                        },
                        data: _this.points,
                    },
                ],
            });
        });
    };
    TrafficChartComponent.prototype.onChartInit = function (echarts) {
        this.echartsIntance = echarts;
    };
    TrafficChartComponent.prototype.resizeChart = function () {
        if (this.echartsIntance) {
            this.echartsIntance.resize();
        }
    };
    TrafficChartComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], TrafficChartComponent.prototype, "points", void 0);
    TrafficChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-traffic-chart',
            styleUrls: ['./traffic.component.scss'],
            template: "\n    <div echarts\n         [options]=\"option\"\n         class=\"echart\"\n         (chartInit)=\"onChartInit($event)\">\n    </div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            utils_1.LayoutService])
    ], TrafficChartComponent);
    return TrafficChartComponent;
}());
exports.TrafficChartComponent = TrafficChartComponent;
//# sourceMappingURL=traffic-chart.component.js.map