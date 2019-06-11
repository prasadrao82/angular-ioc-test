"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var traffic_chart_1 = require("../../../@core/data/traffic-chart");
var TrafficComponent = /** @class */ (function () {
    function TrafficComponent(themeService, trafficChartService) {
        var _this = this;
        this.themeService = themeService;
        this.trafficChartService = trafficChartService;
        this.alive = true;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
        this.trafficChartService.getTrafficChartData()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            _this.trafficChartPoints = data;
        });
    }
    TrafficComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TrafficComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-traffic',
            styleUrls: ['./traffic.component.scss'],
            template: "\n    <nb-card size=\"xsmall\">\n      <nb-card-header>\n        <span>Traffic Consumption</span>\n        <div class=\"dropdown ghost-dropdown\" ngbDropdown>\n          <button type=\"button\" class=\"btn btn-sm\" ngbDropdownToggle\n                  [ngClass]=\"{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n            {{ type }}\n          </button>\n          <ul ngbDropdownMenu class=\"dropdown-menu\">\n            <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\n          </ul>\n        </div>\n      </nb-card-header>\n      <nb-card-body class=\"p-0\">\n        <ngx-traffic-chart [points]=\"trafficChartPoints\"></ngx-traffic-chart>\n      </nb-card-body>\n    </nb-card>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            traffic_chart_1.TrafficChartData])
    ], TrafficComponent);
    return TrafficComponent;
}());
exports.TrafficComponent = TrafficComponent;
//# sourceMappingURL=traffic.component.js.map