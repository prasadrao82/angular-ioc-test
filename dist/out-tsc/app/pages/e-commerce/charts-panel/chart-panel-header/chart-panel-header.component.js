"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var ChartPanelHeaderComponent = /** @class */ (function () {
    function ChartPanelHeaderComponent(themeService, breakpointService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.alive = true;
        this.periodChange = new core_1.EventEmitter();
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.breakpoint = { name: '', width: 0 };
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            var orderProfitLegend = theme.variables.orderProfitLegend;
            _this.currentTheme = theme.name;
            _this.setLegendItems(orderProfitLegend);
        });
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    ChartPanelHeaderComponent.prototype.setLegendItems = function (orderProfitLegend) {
        this.chartLegend = [
            {
                iconColor: orderProfitLegend.firstItem,
                title: 'Payment',
            },
            {
                iconColor: orderProfitLegend.secondItem,
                title: 'Canceled',
            },
            {
                iconColor: orderProfitLegend.thirdItem,
                title: 'All orders',
            },
        ];
    };
    ChartPanelHeaderComponent.prototype.changePeriod = function (period) {
        this.type = period;
        this.periodChange.emit(period);
    };
    ChartPanelHeaderComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], ChartPanelHeaderComponent.prototype, "periodChange", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ChartPanelHeaderComponent.prototype, "type", void 0);
    ChartPanelHeaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-chart-panel-header',
            styleUrls: ['./chart-panel-header.component.scss'],
            templateUrl: './chart-panel-header.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            theme_1.NbMediaBreakpointsService])
    ], ChartPanelHeaderComponent);
    return ChartPanelHeaderComponent;
}());
exports.ChartPanelHeaderComponent = ChartPanelHeaderComponent;
//# sourceMappingURL=chart-panel-header.component.js.map