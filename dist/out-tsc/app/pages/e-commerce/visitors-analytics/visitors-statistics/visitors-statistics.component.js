"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var layout_service_1 = require("../../../../@core/utils/layout.service");
var ECommerceVisitorsStatisticsComponent = /** @class */ (function () {
    function ECommerceVisitorsStatisticsComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.option = {};
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    ECommerceVisitorsStatisticsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }), operators_1.delay(1))
            .subscribe(function (config) {
            var variables = config.variables;
            var visitorsPieLegend = config.variables.visitorsPieLegend;
            _this.setOptions(variables);
            _this.setLegendItems(visitorsPieLegend);
        });
    };
    ECommerceVisitorsStatisticsComponent.prototype.setLegendItems = function (visitorsPieLegend) {
        this.chartLegend = [
            {
                iconColor: visitorsPieLegend.firstSection,
                title: 'New Visitors',
            },
            {
                iconColor: visitorsPieLegend.secondSection,
                title: 'Return Visitors',
            },
        ];
    };
    ECommerceVisitorsStatisticsComponent.prototype.setOptions = function (variables) {
        var visitorsPie = variables.visitorsPie;
        this.option = {
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
                    center: ['50%', '50%'],
                    radius: visitorsPie.firstPieRadius,
                    data: [
                        {
                            value: this.value,
                            name: ' ',
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
                                            color: visitorsPie.firstPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: visitorsPie.firstPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: visitorsPie.firstPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 3,
                                },
                            },
                            hoverAnimation: false,
                        },
                        {
                            value: 100 - this.value,
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
                                    color: variables.layoutBg,
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
                    center: ['50%', '50%'],
                    radius: visitorsPie.secondPieRadius,
                    data: [
                        {
                            value: this.value,
                            name: ' ',
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
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1),
                                },
                            },
                            hoverAnimation: false,
                        },
                        {
                            value: 100 - this.value,
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
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: visitorsPie.secondPieGradientLeft,
                                        },
                                        {
                                            offset: 1,
                                            color: visitorsPie.secondPieGradientRight,
                                        },
                                    ]),
                                    shadowColor: visitorsPie.secondPieShadowColor,
                                    shadowBlur: 0,
                                    shadowOffsetX: visitorsPie.shadowOffsetX,
                                    shadowOffsetY: visitorsPie.shadowOffsetY,
                                },
                            },
                        },
                    ],
                },
            ],
        };
    };
    ECommerceVisitorsStatisticsComponent.prototype.onChartInit = function (echarts) {
        this.echartsIntance = echarts;
    };
    ECommerceVisitorsStatisticsComponent.prototype.resizeChart = function () {
        if (this.echartsIntance) {
            this.echartsIntance.resize();
        }
    };
    ECommerceVisitorsStatisticsComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ECommerceVisitorsStatisticsComponent.prototype, "value", void 0);
    ECommerceVisitorsStatisticsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-visitors-statistics',
            styleUrls: ['./visitors-statistics.component.scss'],
            templateUrl: './visitors-statistics.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            layout_service_1.LayoutService])
    ], ECommerceVisitorsStatisticsComponent);
    return ECommerceVisitorsStatisticsComponent;
}());
exports.ECommerceVisitorsStatisticsComponent = ECommerceVisitorsStatisticsComponent;
//# sourceMappingURL=visitors-statistics.component.js.map