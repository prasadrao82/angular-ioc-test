"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var KittenComponent = /** @class */ (function () {
    function KittenComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    KittenComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    KittenComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-kitten',
            styleUrls: ['./kitten.component.scss'],
            templateUrl: './kitten.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], KittenComponent);
    return KittenComponent;
}());
exports.KittenComponent = KittenComponent;
//# sourceMappingURL=kitten.component.js.map