"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var user_activity_1 = require("../../../@core/data/user-activity");
var ECommerceUserActivityComponent = /** @class */ (function () {
    function ECommerceUserActivityComponent(themeService, userActivityService) {
        var _this = this;
        this.themeService = themeService;
        this.userActivityService = userActivityService;
        this.alive = true;
        this.userActivity = [];
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
        this.getUserActivity(this.type);
    }
    ECommerceUserActivityComponent.prototype.getUserActivity = function (period) {
        var _this = this;
        this.userActivityService.getUserActivityData(period)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (userActivityData) {
            _this.userActivity = userActivityData;
        });
    };
    ECommerceUserActivityComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ECommerceUserActivityComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-user-activity',
            styleUrls: ['./user-activity.component.scss'],
            template: "\n    <nb-card size=\"medium\">\n      <nb-card-header>\n        <span>User Activity</span>\n        <div class=\"dropdown ghost-dropdown\" ngbDropdown>\n          <button type=\"button\" class=\"btn btn-sm\" ngbDropdownToggle\n                  [ngClass]=\"{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n            {{ type }}\n          </button>\n          <ul ngbDropdownMenu class=\"dropdown-menu\">\n            <li class=\"dropdown-item\"\n                *ngFor=\"let t of types\"\n                (click)=\"getUserActivity(t); type = t\">\n              {{ t }}\n            </li>\n          </ul>\n        </div>\n      </nb-card-header>\n      <nb-card-body>\n        <ul class=\"user-activity-list\">\n          <li *ngFor=\"let item of userActivity\">\n            <div class=\"visited-date\">\n              {{ item.date }}\n            </div>\n            <div class=\"visited-pages-count\">\n              <div class=\"title\">Pages Visit</div>\n              <div class=\"value\">{{ item.pagesVisitCount }}</div>\n            </div>\n            <div class=\"visited-percentages\">\n              <div class=\"title\">New visits, %</div>\n              <div class=\"delta value\"\n                   [class.up]=\"item.deltaUp\"\n                   [class.down]=\"!item.deltaUp\">\n                {{ item.newVisits }}%\n              </div>\n            </div>\n          </li>\n        </ul>\n      </nb-card-body>\n    </nb-card>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            user_activity_1.UserActivityData])
    ], ECommerceUserActivityComponent);
    return ECommerceUserActivityComponent;
}());
exports.ECommerceUserActivityComponent = ECommerceUserActivityComponent;
//# sourceMappingURL=user-activity.component.js.map