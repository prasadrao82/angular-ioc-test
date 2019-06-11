"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var theme_1 = require("@nebular/theme");
var utils_1 = require("../../../@core/utils");
// TODO: move layouts into the framework
var SampleLayoutComponent = /** @class */ (function () {
    function SampleLayoutComponent(stateService, menuService, themeService, bpService, sidebarService) {
        var _this = this;
        this.stateService = stateService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.bpService = bpService;
        this.sidebarService = sidebarService;
        this.subMenu = [
            {
                title: 'PAGE LEVEL MENU',
                group: true,
            },
            {
                title: 'Buttons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/buttons',
            },
            {
                title: 'Grid',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/grid',
            },
            {
                title: 'Icons',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/icons',
            },
            {
                title: 'Modals',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/modals',
            },
            {
                title: 'Typography',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/typography',
            },
            {
                title: 'Animated Searches',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/search-fields',
            },
            {
                title: 'Tabs',
                icon: 'ion ion-android-radio-button-off',
                link: '/pages/ui-features/tabs',
            },
        ];
        this.layout = {};
        this.sidebar = {};
        this.alive = true;
        this.stateService.onLayoutState()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (layout) { return _this.layout = layout; });
        this.stateService.onSidebarState()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (sidebar) {
            _this.sidebar = sidebar;
        });
        var isBp = this.bpService.getByName('is');
        this.menuService.onItemSelect()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }), operators_1.withLatestFrom(this.themeService.onMediaQueryChange()), operators_1.delay(20))
            .subscribe(function (_a) {
            var item = _a[0], _b = _a[1], bpFrom = _b[0], bpTo = _b[1];
            if (bpTo.width <= isBp.width) {
                _this.sidebarService.collapse('menu-sidebar');
            }
        });
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    SampleLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SampleLayoutComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-sample-layout',
            styleUrls: ['./sample.layout.scss'],
            template: "\n    <nb-layout [center]=\"layout.id === 'center-column'\" windowMode>\n      <nb-layout-header fixed>\n        <ngx-header [position]=\"sidebar.id === 'start' ? 'normal': 'inverse'\"></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\"\n                   tag=\"menu-sidebar\"\n                   responsive\n                   [end]=\"sidebar.id === 'end'\">\n        <nb-sidebar-header *ngIf=\"currentTheme !== 'corporate'\">\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Helpdesk</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"main-content\">\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-column start class=\"small\" *ngIf=\"layout.id === 'two-column' || layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-column class=\"small\" *ngIf=\"layout.id === 'three-column'\">\n        <nb-menu [items]=\"subMenu\"></nb-menu>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n      <nb-sidebar class=\"settings-sidebar\"\n                   tag=\"settings-sidebar\"\n                   state=\"collapsed\"\n                   fixed\n                   [end]=\"sidebar.id !== 'end'\">\n        <ngx-theme-settings></ngx-theme-settings>\n      </nb-sidebar>\n    </nb-layout>\n    <ngx-toggle-settings-button></ngx-toggle-settings-button>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [utils_1.StateService,
            theme_1.NbMenuService,
            theme_1.NbThemeService,
            theme_1.NbMediaBreakpointsService,
            theme_1.NbSidebarService])
    ], SampleLayoutComponent);
    return SampleLayoutComponent;
}());
exports.SampleLayoutComponent = SampleLayoutComponent;
//# sourceMappingURL=sample.layout.js.map