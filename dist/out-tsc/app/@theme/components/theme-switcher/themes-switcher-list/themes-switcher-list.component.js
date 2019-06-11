"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var analytics_service_1 = require("../../../../@core/utils/analytics.service");
var ThemeSwitcherListComponent = /** @class */ (function () {
    function ThemeSwitcherListComponent(themeService, analyticsService) {
        this.themeService = themeService;
        this.analyticsService = analyticsService;
        this.themes = [
            {
                title: 'Test Light',
                key: 'default',
            },
            {
                title: 'Test Smart',
                key: 'cosmic',
            },
            {
                title: 'Test Safe',
                key: 'corporate',
            },
        ];
    }
    ThemeSwitcherListComponent.prototype.onToggleTheme = function (themeKey) {
        this.themeService.changeTheme(themeKey);
        this.analyticsService.trackEvent('switchTheme');
        this.popover.hide();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", theme_1.NbPopoverDirective)
    ], ThemeSwitcherListComponent.prototype, "popover", void 0);
    ThemeSwitcherListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-theme-switcher-list',
            template: "\n    <ul class=\"themes-switcher-list\">\n      <li class=\"themes-switcher-item\"\n          *ngFor=\"let theme of themes\"\n          (click)=\"onToggleTheme(theme.key)\">\n        <i class=\"nb-drop\" [ngClass]=\"'drop-icon-' + theme.key\"></i>\n        <span>{{ theme.title }}</span>\n      </li>\n    </ul>\n  ",
            styleUrls: ['./theme-switcher-list.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            analytics_service_1.AnalyticsService])
    ], ThemeSwitcherListComponent);
    return ThemeSwitcherListComponent;
}());
exports.ThemeSwitcherListComponent = ThemeSwitcherListComponent;
//# sourceMappingURL=themes-switcher-list.component.js.map