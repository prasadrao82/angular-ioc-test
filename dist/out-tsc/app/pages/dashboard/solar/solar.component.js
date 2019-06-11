"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var SolarComponent = /** @class */ (function () {
    function SolarComponent(theme) {
        this.theme = theme;
        this.value = 0;
        this.option = {};
    }
    Object.defineProperty(SolarComponent.prototype, "chartValue", {
        set: function (value) {
            this.value = value;
            if (this.option.series) {
                this.option.series[0].data[0].value = value;
                this.option.series[0].data[1].value = 100 - value;
                this.option.series[1].data[0].value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    SolarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().pipe(operators_1.delay(1)).subscribe(function (config) {
            var solarTheme = config.variables.solar;
            _this.option = Object.assign({}, {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                series: [
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'center',
                                        formatter: '{d}%',
                                        textStyle: {
                                            fontSize: '22',
                                            fontFamily: config.variables.fontSecondary,
                                            fontWeight: '600',
                                            color: config.variables.fgHeading,
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
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 0,
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 3,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 100 - _this.value,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: config.variables.layoutBg,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        name: ' ',
                        clockWise: true,
                        hoverAnimation: false,
                        type: 'pie',
                        center: ['45%', '50%'],
                        radius: solarTheme.radius,
                        data: [
                            {
                                value: _this.value,
                                name: ' ',
                                label: {
                                    normal: {
                                        position: 'inner',
                                        show: false,
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
                                                color: solarTheme.gradientLeft,
                                            },
                                            {
                                                offset: 1,
                                                color: solarTheme.gradientRight,
                                            },
                                        ]),
                                        shadowColor: solarTheme.shadowColor,
                                        shadowBlur: 7,
                                    },
                                },
                                hoverAnimation: false,
                            },
                            {
                                value: 28,
                                name: ' ',
                                tooltip: {
                                    show: false,
                                },
                                label: {
                                    normal: {
                                        position: 'inner',
                                    },
                                },
                                itemStyle: {
                                    normal: {
                                        color: 'none',
                                    },
                                },
                            },
                        ],
                    },
                ],
            });
        });
    };
    SolarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    tslib_1.__decorate([
        core_1.Input('chartValue'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], SolarComponent.prototype, "chartValue", null);
    SolarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-solar',
            styleUrls: ['./solar.component.scss'],
            template: "\n    <nb-card size=\"xsmall\" class=\"solar-card\">\n      <nb-card-header>Solar Energy Consumption</nb-card-header>\n      <nb-card-body>\n        <div echarts [options]=\"option\" class=\"echart\">\n        </div>\n        <div class=\"info\">\n          <div class=\"value\">6. 421 kWh</div>\n          <div class=\"details\"><span>out of</span> 8.421 kWh</div>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], SolarComponent);
    return SolarComponent;
}());
exports.SolarComponent = SolarComponent;
//# sourceMappingURL=solar.component.js.map