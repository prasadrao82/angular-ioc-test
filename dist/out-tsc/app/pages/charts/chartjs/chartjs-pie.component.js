"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var ChartjsPieComponent = /** @class */ (function () {
    function ChartjsPieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
                datasets: [{
                        data: [300, 500, 100],
                        backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsPieComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-chartjs-pie',
            template: "\n    <chart type=\"pie\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], ChartjsPieComponent);
    return ChartjsPieComponent;
}());
exports.ChartjsPieComponent = ChartjsPieComponent;
//# sourceMappingURL=chartjs-pie.component.js.map