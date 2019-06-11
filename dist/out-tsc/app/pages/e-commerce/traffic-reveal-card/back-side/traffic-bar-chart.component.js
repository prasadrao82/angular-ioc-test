"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var layout_service_1 = require("../../../../@core/utils/layout.service");
var TrafficBarChartComponent = /** @class */ (function () {
    function TrafficBarChartComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.option = {};
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    TrafficBarChartComponent.prototype.onChartInit = function (ec) {
        this.echartsInstance = ec;
    };
    TrafficBarChartComponent.prototype.resizeChart = function () {
        if (this.echartsInstance) {
            this.echartsInstance.resize();
        }
    };
    TrafficBarChartComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.data.isFirstChange() && !changes.labels.isFirstChange()) {
            this.echartsInstance.setOption({
                series: [{
                        data: this.data,
                    }],
                xAxis: {
                    data: this.labels,
                },
                tooltip: {
                    formatter: this.formatter,
                },
            });
        }
    };
    TrafficBarChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (config) {
            var trafficTheme = config.variables.trafficBarEchart;
            _this.option = Object.assign({}, {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    data: _this.labels,
                    axisLabel: {
                        color: trafficTheme.axisTextColor,
                        fontSize: trafficTheme.axisFontSize,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: {
                    show: false,
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    boundaryGap: [0, '5%'],
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
                    formatter: _this.formatter,
                    extraCssText: trafficTheme.tooltipExtraCss,
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: '40%',
                        data: _this.data,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: trafficTheme.gradientFrom,
                                    }, {
                                        offset: 1,
                                        color: trafficTheme.gradientTo,
                                    }]),
                                opacity: 1,
                                shadowColor: trafficTheme.gradientFrom,
                                shadowBlur: trafficTheme.shadowBlur,
                            },
                        },
                    },
                ],
            });
        });
    };
    TrafficBarChartComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], TrafficBarChartComponent.prototype, "data", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], TrafficBarChartComponent.prototype, "labels", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], TrafficBarChartComponent.prototype, "formatter", void 0);
    TrafficBarChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-traffic-bar-chart',
            styleUrls: ['traffic-back-card.component.scss'],
            template: "\n    <div echarts\n         [options]=\"option\"\n         class=\"echart\"\n         (chartInit)=\"onChartInit($event)\">\n    </div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            layout_service_1.LayoutService])
    ], TrafficBarChartComponent);
    return TrafficBarChartComponent;
}());
exports.TrafficBarChartComponent = TrafficBarChartComponent;
//# sourceMappingURL=traffic-bar-chart.component.js.map