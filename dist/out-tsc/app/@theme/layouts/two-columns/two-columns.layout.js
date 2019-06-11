"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
// TODO: move layouts into the framework
var TwoColumnsLayoutComponent = /** @class */ (function () {
    function TwoColumnsLayoutComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    TwoColumnsLayoutComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TwoColumnsLayoutComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-two-columns-layout',
            styleUrls: ['./two-columns.layout.scss'],
            template: "\n    <nb-layout>\n      <nb-layout-header fixed>\n        <ngx-header></ngx-header>\n      </nb-layout-header>\n\n      <nb-sidebar class=\"menu-sidebar\" tag=\"menu-sidebar\" responsive >\n        <nb-sidebar-header *ngIf=\"currentTheme !== 'corporate'\">\n          <a href=\"#\" class=\"btn btn-hero-success main-btn\">\n            <i class=\"ion ion-social-github\"></i> <span>Helpdesk</span>\n          </a>\n        </nb-sidebar-header>\n        <ng-content select=\"nb-menu\"></ng-content>\n      </nb-sidebar>\n\n      <nb-layout-column class=\"small\">\n      </nb-layout-column>\n\n      <nb-layout-column>\n        <ng-content select=\"router-outlet\"></ng-content>\n      </nb-layout-column>\n\n      <nb-layout-footer fixed>\n        <ngx-footer></ngx-footer>\n      </nb-layout-footer>\n\n    </nb-layout>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], TwoColumnsLayoutComponent);
    return TwoColumnsLayoutComponent;
}());
exports.TwoColumnsLayoutComponent = TwoColumnsLayoutComponent;
//# sourceMappingURL=two-columns.layout.js.map