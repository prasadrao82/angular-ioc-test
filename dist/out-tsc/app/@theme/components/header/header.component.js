"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var users_1 = require("../../../@core/data/users");
var utils_1 = require("../../../@core/utils");
var utils_2 = require("../../../@core/utils");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sidebarService, menuService, userService, analyticsService, layoutService) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.userService = userService;
        this.analyticsService = analyticsService;
        this.layoutService = layoutService;
        this.position = 'normal';
        this.userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.user = users.prasad; });
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    };
    HeaderComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    HeaderComponent.prototype.startSearch = function () {
        this.analyticsService.trackEvent('startSearch');
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], HeaderComponent.prototype, "position", void 0);
    HeaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-header',
            styleUrls: ['./header.component.scss'],
            templateUrl: './header.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbSidebarService,
            theme_1.NbMenuService,
            users_1.UserData,
            utils_1.AnalyticsService,
            utils_2.LayoutService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map