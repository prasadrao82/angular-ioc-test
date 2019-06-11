"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var utils_1 = require("../../../../@core/utils");
var ECommerceVisitorsAnalyticsChartComponent = /** @class */ (function () {
    function ECommerceVisitorsAnalyticsChartComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    ECommerceVisitorsAnalyticsChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.delay(1), operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (config) {
            var eTheme = config.variables.visitors;
            _this.setOptions(eTheme);
        });
    };
    ECommerceVisitorsAnalyticsChartComponent.prototype.setOptions = function (eTheme) {
        this.option = {
            grid: {
                left: 40,
                top: 20,
                right: 0,
                bottom: 60,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: eTheme.tooltipLineColor,
                        width: eTheme.tooltipLineWidth,
                    },
                },
                textStyle: {
                    color: eTheme.tooltipTextColor,
                    fontSize: 20,
                    fontWeight: eTheme.tooltipFontWeight,
                },
                position: 'top',
                backgroundColor: eTheme.tooltipBg,
                borderColor: eTheme.tooltipBorderColor,
                borderWidth: 3,
                formatter: function (params) {
                    return Math.round(parseInt(params[0].value, 10));
                },
                extraCssText: eTheme.tooltipExtraCss,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                offset: 25,
                data: this.chartData.outerLine.map(function (i) { return i.label; }),
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: eTheme.axisTextColor,
                    fontSize: eTheme.axisFontSize,
                },
                axisLine: {
                    lineStyle: {
                        color: eTheme.axisLineColor,
                        width: '2',
                    },
                },
            },
            yAxis: {
                type: 'value',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: eTheme.axisLineColor,
                        width: '1',
                    },
                },
                axisLabel: {
                    color: eTheme.axisTextColor,
                    fontSize: eTheme.axisFontSize,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: eTheme.yAxisSplitLine,
                        width: '1',
                    },
                },
            },
            series: [
                this.getInnerLine(eTheme),
                this.getOuterLine(eTheme),
            ],
        };
    };
    ECommerceVisitorsAnalyticsChartComponent.prototype.getOuterLine = function (eTheme) {
        return {
            type: 'line',
            smooth: true,
            symbolSize: 20,
            itemStyle: {
                normal: {
                    opacity: 0,
                },
                emphasis: {
                    color: '#ffffff',
                    borderColor: eTheme.itemBorderColor,
                    borderWidth: 2,
                    opacity: 1,
                },
            },
            lineStyle: {
                normal: {
                    width: eTheme.lineWidth,
                    type: eTheme.lineStyle,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.lineGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.lineGradTo,
                        }]),
                    shadowColor: eTheme.lineShadow,
                    shadowBlur: 6,
                    shadowOffsetY: 12,
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.areaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.areaGradTo,
                        }]),
                },
            },
            data: this.chartData.outerLine.map(function (i) { return i.value; }),
        };
    };
    ECommerceVisitorsAnalyticsChartComponent.prototype.getInnerLine = function (eTheme) {
        return {
            type: 'line',
            smooth: true,
            symbolSize: 20,
            tooltip: {
                show: false,
                extraCssText: '',
            },
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
                    width: eTheme.innerLineWidth,
                    type: eTheme.innerLineStyle,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.innerAreaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.innerAreaGradTo,
                        }]),
                    opacity: 1,
                },
            },
            data: this.chartData.innerLine,
        };
    };
    ECommerceVisitorsAnalyticsChartComponent.prototype.onChartInit = function (echarts) {
        this.echartsIntance = echarts;
    };
    ECommerceVisitorsAnalyticsChartComponent.prototype.resizeChart = function () {
        if (this.echartsIntance) {
            this.echartsIntance.resize();
        }
    };
    ECommerceVisitorsAnalyticsChartComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ECommerceVisitorsAnalyticsChartComponent.prototype, "chartData", void 0);
    ECommerceVisitorsAnalyticsChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-visitors-analytics-chart',
            styleUrls: ['./visitors-analytics-chart.component.scss'],
            template: "\n    <div echarts\n         [options]=\"option\"\n         class=\"echart\"\n         (chartInit)=\"onChartInit($event)\">\n    </div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            utils_1.LayoutService])
    ], ECommerceVisitorsAnalyticsChartComponent);
    return ECommerceVisitorsAnalyticsChartComponent;
}());
exports.ECommerceVisitorsAnalyticsChartComponent = ECommerceVisitorsAnalyticsChartComponent;
//# sourceMappingURL=visitors-analytics-chart.component.js.map