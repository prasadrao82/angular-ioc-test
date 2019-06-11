"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var EarningPieChartComponent = /** @class */ (function () {
    function EarningPieChartComponent(theme) {
        this.theme = theme;
        this.selectPie = new core_1.EventEmitter();
        this.alive = true;
        this.options = {};
    }
    EarningPieChartComponent.prototype.onChartInit = function (ec) {
        this.echartsInstance = ec;
    };
    EarningPieChartComponent.prototype.onChartClick = function (event) {
        var pieData = {
            value: event.value,
            name: event.name,
            color: event.color.colorStops[0].color,
        };
        this.emitSelectPie(pieData);
    };
    EarningPieChartComponent.prototype.emitSelectPie = function (pieData) {
        this.selectPie.emit(pieData);
    };
    EarningPieChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }), operators_1.delay(1))
            .subscribe(function (config) {
            var variables = config.variables;
            _this.options = _this.getOptions(variables);
            var defaultSelectedData = _this.options.series[0].data.find(function (item) { return item.name === _this.defaultSelectedCurrency; });
            var color = defaultSelectedData.itemStyle.normal.color.colorStops[0].color;
            var pieData = {
                value: defaultSelectedData.value,
                name: defaultSelectedData.name,
                color: color,
            };
            _this.emitSelectPie(pieData);
        });
    };
    EarningPieChartComponent.prototype.getOptions = function (variables) {
        var earningPie = variables.earningPie;
        return {
            tooltip: {
                trigger: 'item',
                formatter: '',
            },
            series: [
                {
                    name: ' ',
                    clockWise: true,
                    hoverAnimation: false,
                    type: 'pie',
                    center: earningPie.center,
                    radius: earningPie.radius,
                    data: [
                        {
                            value: this.values[0].value,
                            name: this.values[0].name,
                            label: {
                                normal: {
                                    position: 'center',
                                    formatter: '',
                                    textStyle: {
                                        fontSize: '22',
                                        fontFamily: variables.fontSecondary,
                                        fontWeight: '600',
                                        color: variables.fgHeading,
                                    },
                                },
                            },
                            tooltip: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: earningPie.firstPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: earningPie.firstPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: earningPie.firstPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                        },
                        {
                            value: this.values[1].value,
                            name: this.values[1].name,
                            label: {
                                normal: {
                                    position: 'center',
                                    formatter: '',
                                    textStyle: {
                                        fontSize: '22',
                                        fontFamily: variables.fontSecondary,
                                        fontWeight: '600',
                                        color: variables.fgHeading,
                                    },
                                },
                            },
                            tooltip: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: earningPie.secondPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: earningPie.secondPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: earningPie.secondPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                        },
                        {
                            value: this.values[2].value,
                            name: this.values[2].name,
                            label: {
                                normal: {
                                    position: 'center',
                                    formatter: '',
                                    textStyle: {
                                        fontSize: '22',
                                        fontFamily: variables.fontSecondary,
                                        fontWeight: '600',
                                        color: variables.fgHeading,
                                    },
                                },
                            },
                            tooltip: {
                                show: false,
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: earningPie.thirdPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: earningPie.thirdPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: earningPie.thirdPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                        },
                    ],
                },
            ],
        };
    };
    EarningPieChartComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], EarningPieChartComponent.prototype, "selectPie", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], EarningPieChartComponent.prototype, "values", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], EarningPieChartComponent.prototype, "defaultSelectedCurrency", void 0);
    EarningPieChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-earning-pie-chart',
            styleUrls: ['./earning-card-back.component.scss'],
            template: "\n    <div echarts\n         class=\"echart\"\n         [options]=\"options\"\n         (chartInit)=\"onChartInit($event)\"\n         (chartClick)=\"onChartClick($event)\">\n    </div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], EarningPieChartComponent);
    return EarningPieChartComponent;
}());
exports.EarningPieChartComponent = EarningPieChartComponent;
//# sourceMappingURL=earning-pie-chart.component.js.map