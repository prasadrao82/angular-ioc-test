"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var layout_service_1 = require("../../../../@core/utils/layout.service");
var ProfitChartComponent = /** @class */ (function () {
    function ProfitChartComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.options = {};
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    ProfitChartComponent.prototype.ngOnChanges = function () {
        if (this.echartsIntance) {
            this.updateProfitChartOptions(this.profitChartData);
        }
    };
    ProfitChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (config) {
            var eTheme = config.variables.profit;
            _this.setOptions(eTheme);
        });
    };
    ProfitChartComponent.prototype.setOptions = function (eTheme) {
        this.options = {
            backgroundColor: eTheme.bg,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(0, 0, 0, 0.3)',
                    },
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.profitChartData.chartLabel,
                    axisTick: {
                        alignWithLabel: true,
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                        },
                    },
                    axisLabel: {
                        color: eTheme.axisTextColor,
                        fontSize: eTheme.axisFontSize,
                    },
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: eTheme.splitLineColor,
                        },
                    },
                    axisLabel: {
                        color: eTheme.axisTextColor,
                        fontSize: eTheme.axisFontSize,
                    },
                },
            ],
            series: [
                {
                    name: 'Canceled',
                    type: 'bar',
                    barGap: 0,
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: eTheme.firstLineGradFrom,
                                }, {
                                    offset: 1,
                                    color: eTheme.firstLineGradTo,
                                }]),
                        },
                    },
                    data: this.profitChartData.data[0],
                },
                {
                    name: 'Payment',
                    type: 'bar',
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: eTheme.secondLineGradFrom,
                                }, {
                                    offset: 1,
                                    color: eTheme.secondLineGradTo,
                                }]),
                        },
                    },
                    data: this.profitChartData.data[1],
                },
                {
                    name: 'All orders',
                    type: 'bar',
                    barWidth: '20%',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: eTheme.thirdLineGradFrom,
                                }, {
                                    offset: 1,
                                    color: eTheme.thirdLineGradTo,
                                }]),
                        },
                    },
                    data: this.profitChartData.data[2],
                },
            ],
        };
    };
    ProfitChartComponent.prototype.updateProfitChartOptions = function (profitChartData) {
        var options = this.options;
        var series = this.getNewSeries(options.series, profitChartData.data);
        this.echartsIntance.setOption({
            series: series,
            xAxis: {
                data: this.profitChartData.chartLabel,
            },
        });
    };
    ProfitChartComponent.prototype.getNewSeries = function (series, data) {
        return series.map(function (line, index) {
            return tslib_1.__assign({}, line, { data: data[index] });
        });
    };
    ProfitChartComponent.prototype.onChartInit = function (echarts) {
        this.echartsIntance = echarts;
    };
    ProfitChartComponent.prototype.resizeChart = function () {
        var _this = this;
        if (this.echartsIntance) {
            // Fix recalculation chart size
            // TODO: investigate more deeply
            setTimeout(function () {
                _this.echartsIntance.resize();
            }, 0);
        }
    };
    ProfitChartComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ProfitChartComponent.prototype, "profitChartData", void 0);
    ProfitChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-profit-chart',
            styleUrls: ['./charts-common.component.scss'],
            template: "\n    <div echarts [options]=\"options\" class=\"echart\" (chartInit)=\"onChartInit($event)\"></div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            layout_service_1.LayoutService])
    ], ProfitChartComponent);
    return ProfitChartComponent;
}());
exports.ProfitChartComponent = ProfitChartComponent;
//# sourceMappingURL=profit-chart.component.js.map