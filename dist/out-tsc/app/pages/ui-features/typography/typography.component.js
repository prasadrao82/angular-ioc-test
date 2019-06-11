"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var TypographyComponent = /** @class */ (function () {
    function TypographyComponent(themeService, breakpointService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeSubscription = this.themeService.onMediaQueryChange()
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
    }
    TypographyComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TypographyComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-typography',
            styleUrls: ['./typography.component.scss'],
            templateUrl: './typography.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            theme_1.NbMediaBreakpointsService])
    ], TypographyComponent);
    return TypographyComponent;
}());
exports.TypographyComponent = TypographyComponent;
//# sourceMappingURL=typography.component.js.map