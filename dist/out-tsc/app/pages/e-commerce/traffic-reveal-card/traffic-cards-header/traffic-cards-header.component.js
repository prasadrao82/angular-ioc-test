"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var TrafficCardsHeaderComponent = /** @class */ (function () {
    function TrafficCardsHeaderComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.alive = true;
        this.periodChange = new core_1.EventEmitter();
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    TrafficCardsHeaderComponent.prototype.changePeriod = function (period) {
        this.type = period;
        this.periodChange.emit(period);
    };
    TrafficCardsHeaderComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], TrafficCardsHeaderComponent.prototype, "periodChange", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], TrafficCardsHeaderComponent.prototype, "type", void 0);
    TrafficCardsHeaderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-traffic-cards-header',
            styleUrls: ['./traffic-cards-header.component.scss'],
            templateUrl: './traffic-cards-header.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], TrafficCardsHeaderComponent);
    return TrafficCardsHeaderComponent;
}());
exports.TrafficCardsHeaderComponent = TrafficCardsHeaderComponent;
//# sourceMappingURL=traffic-cards-header.component.js.map