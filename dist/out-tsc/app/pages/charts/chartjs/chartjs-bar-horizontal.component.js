"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var ChartjsBarHorizontalComponent = /** @class */ (function () {
    function ChartjsBarHorizontalComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: colors.infoLight,
                        borderWidth: 1,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    }, {
                        label: 'Dataset 2',
                        backgroundColor: colors.successLight,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsBarHorizontalComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsBarHorizontalComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    ChartjsBarHorizontalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-chartjs-bar-horizontal',
            template: "\n    <chart type=\"horizontalBar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], ChartjsBarHorizontalComponent);
    return ChartjsBarHorizontalComponent;
}());
exports.ChartjsBarHorizontalComponent = ChartjsBarHorizontalComponent;
//# sourceMappingURL=chartjs-bar-horizontal.component.js.map