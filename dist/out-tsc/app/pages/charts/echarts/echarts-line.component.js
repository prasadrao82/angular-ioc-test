"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var EchartsLineComponent = /** @class */ (function () {
    function EchartsLineComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsLineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.primary, colors.info],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}',
                },
                legend: {
                    left: 'left',
                    data: ['Line 1', 'Line 2', 'Line 3'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'log',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                series: [
                    {
                        name: 'Line 1',
                        type: 'line',
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
                    },
                ],
            };
        });
    };
    EchartsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    EchartsLineComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-echarts-line',
            template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], EchartsLineComponent);
    return EchartsLineComponent;
}());
exports.EchartsLineComponent = EchartsLineComponent;
//# sourceMappingURL=echarts-line.component.js.map