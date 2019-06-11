"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var D3AreaStackComponent = /** @class */ (function () {
    function D3AreaStackComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [{
                name: 'Germany',
                series: [{
                        name: '2010',
                        value: 7300000,
                    }, {
                        name: '2011',
                        value: 8940000,
                    }],
            }, {
                name: 'USA',
                series: [{
                        name: '2010',
                        value: 7870000,
                    }, {
                        name: '2011',
                        value: 8270000,
                    }],
            }, {
                name: 'France',
                series: [{
                        name: '2010',
                        value: 5000002,
                    }, {
                        name: '2011',
                        value: 5800000,
                    }],
            }];
        this.showLegend = true;
        this.autoScale = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3AreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    D3AreaStackComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-d3-area-stack',
            template: "\n    <ngx-charts-area-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\">\n    </ngx-charts-area-chart>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], D3AreaStackComponent);
    return D3AreaStackComponent;
}());
exports.D3AreaStackComponent = D3AreaStackComponent;
//# sourceMappingURL=d3-area-stack.component.js.map