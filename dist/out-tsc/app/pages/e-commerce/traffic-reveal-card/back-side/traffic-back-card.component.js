"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var TrafficBackCardComponent = /** @class */ (function () {
    function TrafficBackCardComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.alive = true;
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    TrafficBackCardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], TrafficBackCardComponent.prototype, "trafficBarData", void 0);
    TrafficBackCardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-traffic-back-card',
            styleUrls: ['./traffic-back-card.component.scss'],
            templateUrl: './traffic-back-card.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], TrafficBackCardComponent);
    return TrafficBackCardComponent;
}());
exports.TrafficBackCardComponent = TrafficBackCardComponent;
//# sourceMappingURL=traffic-back-card.component.js.map