"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var theme_1 = require("@nebular/theme");
var visitors_analytics_1 = require("../../../@core/data/visitors-analytics");
var rxjs_1 = require("rxjs");
var ECommerceVisitorsAnalyticsComponent = /** @class */ (function () {
    function ECommerceVisitorsAnalyticsComponent(themeService, visitorsAnalyticsChartService) {
        var _this = this;
        this.themeService = themeService;
        this.visitorsAnalyticsChartService = visitorsAnalyticsChartService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.setLegendItems(theme.variables.visitorsLegend);
        });
        rxjs_1.forkJoin(this.visitorsAnalyticsChartService.getInnerLineChartData(), this.visitorsAnalyticsChartService.getOutlineLineChartData(), this.visitorsAnalyticsChartService.getPieChartData())
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var innerLine = _a[0], outerLine = _a[1], pieChartValue = _a[2];
            _this.visitorsAnalyticsData = {
                innerLine: innerLine,
                outerLine: outerLine,
            };
            _this.pieChartValue = pieChartValue;
        });
    }
    ECommerceVisitorsAnalyticsComponent.prototype.setLegendItems = function (visitorsLegend) {
        this.chartLegend = [
            {
                iconColor: visitorsLegend.firstIcon,
                title: 'Unique Visitors',
            },
            {
                iconColor: visitorsLegend.secondIcon,
                title: 'Page Views',
            },
        ];
    };
    ECommerceVisitorsAnalyticsComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ECommerceVisitorsAnalyticsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-ecommerce-visitors-analytics',
            styleUrls: ['./visitors-analytics.component.scss'],
            templateUrl: './visitors-analytics.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            visitors_analytics_1.VisitorsAnalyticsData])
    ], ECommerceVisitorsAnalyticsComponent);
    return ECommerceVisitorsAnalyticsComponent;
}());
exports.ECommerceVisitorsAnalyticsComponent = ECommerceVisitorsAnalyticsComponent;
//# sourceMappingURL=visitors-analytics.component.js.map