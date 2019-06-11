"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var TrafficFrontCardComponent = /** @class */ (function () {
    function TrafficFrontCardComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    TrafficFrontCardComponent.prototype.trackByDate = function (_, item) {
        return item.date;
    };
    TrafficFrontCardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], TrafficFrontCardComponent.prototype, "frontCardData", void 0);
    TrafficFrontCardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-traffic-front-card',
            styleUrls: ['./traffic-front-card.component.scss'],
            templateUrl: './traffic-front-card.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], TrafficFrontCardComponent);
    return TrafficFrontCardComponent;
}());
exports.TrafficFrontCardComponent = TrafficFrontCardComponent;
//# sourceMappingURL=traffic-front-card.component.js.map