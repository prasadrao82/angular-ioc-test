"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var earning_1 = require("../../../../@core/data/earning");
var EarningCardFrontComponent = /** @class */ (function () {
    function EarningCardFrontComponent(themeService, earningService) {
        var _this = this;
        this.themeService = themeService;
        this.earningService = earningService;
        this.alive = true;
        this.selectedCurrency = 'Bitcoin';
        this.currencies = ['Bitcoin', 'Tether', 'Ethereum'];
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    EarningCardFrontComponent.prototype.ngOnInit = function () {
        this.getEarningCardData(this.selectedCurrency);
    };
    EarningCardFrontComponent.prototype.changeCurrency = function (currency) {
        if (this.selectedCurrency !== currency) {
            this.selectedCurrency = currency;
            this.getEarningCardData(this.selectedCurrency);
        }
    };
    EarningCardFrontComponent.prototype.getEarningCardData = function (currency) {
        var _this = this;
        this.earningService.getEarningCardData(currency)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (earningLiveUpdateCardData) {
            _this.earningLiveUpdateCardData = earningLiveUpdateCardData;
            _this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;
            _this.startReceivingLiveData(currency);
        });
    };
    EarningCardFrontComponent.prototype.startReceivingLiveData = function (currency) {
        var _this = this;
        if (this.intervalSubscription) {
            this.intervalSubscription.unsubscribe();
        }
        this.intervalSubscription = rxjs_1.interval(200)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }), operators_1.switchMap(function () { return _this.earningService.getEarningLiveUpdateCardData(currency); }))
            .subscribe(function (liveUpdateChartData) {
            _this.liveUpdateChartData = liveUpdateChartData.slice();
        });
    };
    EarningCardFrontComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], EarningCardFrontComponent.prototype, "selectedCurrency", void 0);
    EarningCardFrontComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-earning-card-front',
            styleUrls: ['./earning-card-front.component.scss'],
            templateUrl: './earning-card-front.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            earning_1.EarningData])
    ], EarningCardFrontComponent);
    return EarningCardFrontComponent;
}());
exports.EarningCardFrontComponent = EarningCardFrontComponent;
//# sourceMappingURL=earning-card-front.component.js.map