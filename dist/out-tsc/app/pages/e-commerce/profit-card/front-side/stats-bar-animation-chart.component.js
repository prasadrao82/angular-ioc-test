"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var layout_service_1 = require("../../../../@core/utils/layout.service");
var StatsBarAnimationChartComponent = /** @class */ (function () {
    function StatsBarAnimationChartComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.linesData = {
            firstLine: [],
            secondLine: [],
        };
        this.options = {};
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    StatsBarAnimationChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (config) {
            var profitBarAnimationEchart = config.variables.profitBarAnimationEchart;
            _this.setChartOption(profitBarAnimationEchart);
        });
    };
    StatsBarAnimationChartComponent.prototype.setChartOption = function (chartVariables) {
        this.options = {
            color: [
                chartVariables.firstAnimationBarColor,
                chartVariables.secondAnimationBarColor,
            ],
            grid: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
            },
            legend: {
                data: ['transactions', 'orders'],
                borderWidth: 0,
                borderRadius: 0,
                itemWidth: 15,
                itemHeight: 15,
                textStyle: {
                    color: chartVariables.textColor,
                },
            },
            tooltip: {
                axisPointer: {
                    type: 'shadow',
                },
                textStyle: {
                    color: chartVariables.tooltipTextColor,
                    fontWeight: chartVariables.tooltipFontWeight,
                    fontSize: chartVariables.tooltipFontSize,
                },
                position: 'top',
                backgroundColor: chartVariables.tooltipBg,
                borderColor: chartVariables.tooltipBorderColor,
                borderWidth: chartVariables.tooltipBorderWidth,
                formatter: function (params) { return "$ " + Math.round(parseInt(params.value, 10)); },
                extraCssText: chartVariables.tooltipExtraCss,
            },
            xAxis: [
                {
                    data: this.linesData.firstLine.map(function (_, index) { return index; }),
                    silent: false,
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
            ],
            yAxis: [
                {
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
                            color: chartVariables.splitLineStyleColor,
                            opacity: chartVariables.splitLineStyleOpacity,
                            width: chartVariables.splitLineStyleWidth,
                        },
                    },
                },
            ],
            series: [
                {
                    name: 'transactions',
                    type: 'bar',
                    data: this.linesData.firstLine,
                    animationDelay: function (idx) { return idx * 10; },
                },
                {
                    name: 'orders',
                    type: 'bar',
                    data: this.linesData.secondLine,
                    animationDelay: function (idx) { return idx * 10 + 100; },
                },
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) { return idx * 5; },
        };
    };
    StatsBarAnimationChartComponent.prototype.onChartInit = function (echarts) {
        this.echartsIntance = echarts;
    };
    StatsBarAnimationChartComponent.prototype.resizeChart = function () {
        if (this.echartsIntance) {
            this.echartsIntance.resize();
        }
    };
    StatsBarAnimationChartComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], StatsBarAnimationChartComponent.prototype, "linesData", void 0);
    StatsBarAnimationChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-stats-bar-animation-chart',
            template: "\n    <div echarts\n         [options]=\"options\"\n         class=\"echart\"\n         (chartInit)=\"onChartInit($event)\">\n    </div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            layout_service_1.LayoutService])
    ], StatsBarAnimationChartComponent);
    return StatsBarAnimationChartComponent;
}());
exports.StatsBarAnimationChartComponent = StatsBarAnimationChartComponent;
//# sourceMappingURL=stats-bar-animation-chart.component.js.map