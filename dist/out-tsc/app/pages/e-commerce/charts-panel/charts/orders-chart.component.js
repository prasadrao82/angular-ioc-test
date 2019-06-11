"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var layout_service_1 = require("../../../../@core/utils/layout.service");
var OrdersChartComponent = /** @class */ (function () {
    function OrdersChartComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    OrdersChartComponent.prototype.ngOnChanges = function () {
        if (this.option) {
            this.updateOrdersChartOptions(this.ordersChartData);
        }
    };
    OrdersChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }), operators_1.delay(1))
            .subscribe(function (config) {
            var eTheme = config.variables.orders;
            _this.setOptions(eTheme);
            _this.updateOrdersChartOptions(_this.ordersChartData);
        });
    };
    OrdersChartComponent.prototype.setOptions = function (eTheme) {
        this.option = {
            grid: {
                left: 40,
                top: 20,
                right: 0,
                bottom: 40,
            },
            tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: eTheme.tooltipLineColor,
                        width: eTheme.tooltipLineWidth,
                    },
                },
                textStyle: {
                    color: eTheme.tooltipTextColor,
                    fontSize: eTheme.tooltipFontSize,
                    fontWeight: eTheme.tooltipFontWeight,
                },
                position: 'top',
                backgroundColor: eTheme.tooltipBg,
                borderColor: eTheme.tooltipBorderColor,
                borderWidth: 3,
                formatter: function (params) {
                    return Math.round(parseInt(params.value, 10));
                },
                extraCssText: eTheme.tooltipExtraCss,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                offset: 5,
                data: [],
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
                this.getFirstLine(eTheme),
                this.getSecondLine(eTheme),
                this.getThirdLine(eTheme),
            ],
        };
    };
    OrdersChartComponent.prototype.getFirstLine = function (eTheme) {
        return {
            type: 'line',
            smooth: true,
            symbolSize: 20,
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
                            color: eTheme.firstAreaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.firstAreaGradTo,
                        }]),
                    opacity: 1,
                },
            },
            data: [],
        };
    };
    OrdersChartComponent.prototype.getSecondLine = function (eTheme) {
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
                            color: eTheme.secondLineGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.secondLineGradTo,
                        }]),
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.secondAreaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.secondAreaGradTo,
                        }]),
                },
            },
            data: [],
        };
    };
    OrdersChartComponent.prototype.getThirdLine = function (eTheme) {
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
                            color: eTheme.thirdLineGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.thirdLineGradTo,
                        }]),
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: eTheme.thirdAreaGradFrom,
                        }, {
                            offset: 1,
                            color: eTheme.thirdAreaGradTo,
                        }]),
                },
            },
            data: [],
        };
    };
    OrdersChartComponent.prototype.updateOrdersChartOptions = function (ordersChartData) {
        var options = this.option;
        var series = this.getNewSeries(options.series, ordersChartData.linesData);
        var xAxis = this.getNewXAxis(options.xAxis, ordersChartData.chartLabel);
        this.option = tslib_1.__assign({}, options, { xAxis: xAxis,
            series: series });
    };
    OrdersChartComponent.prototype.getNewSeries = function (series, linesData) {
        return series.map(function (line, index) {
            return tslib_1.__assign({}, line, { data: linesData[index] });
        });
    };
    OrdersChartComponent.prototype.getNewXAxis = function (xAxis, chartLabel) {
        return tslib_1.__assign({}, xAxis, { data: chartLabel });
    };
    OrdersChartComponent.prototype.onChartInit = function (echarts) {
        this.echartsIntance = echarts;
    };
    OrdersChartComponent.prototype.resizeChart = function () {
        var _this = this;
        if (this.echartsIntance) {
            // Fix recalculation chart size
            // TODO: investigate more deeply
            setTimeout(function () {
                _this.echartsIntance.resize();
            }, 0);
        }
    };
    OrdersChartComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], OrdersChartComponent.prototype, "ordersChartData", void 0);
    OrdersChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-orders-chart',
            styleUrls: ['./charts-common.component.scss'],
            template: "\n    <div echarts\n         [options]=\"option\"\n         class=\"echart\"\n         (chartInit)=\"onChartInit($event)\">\n    </div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            layout_service_1.LayoutService])
    ], OrdersChartComponent);
    return OrdersChartComponent;
}());
exports.OrdersChartComponent = OrdersChartComponent;
//# sourceMappingURL=orders-chart.component.js.map