"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var country_order_1 = require("../../../@core/data/country-order");
var CountryOrdersComponent = /** @class */ (function () {
    function CountryOrdersComponent(themeService, breakpointService, countryOrderService) {
        var _this = this;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.countryOrderService = countryOrderService;
        this.alive = true;
        this.countryName = '';
        this.countryData = [];
        this.breakpoint = { name: '', width: 0 };
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
        this.countryOrderService.getCountriesCategories()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (countriesCategories) {
            _this.countriesCategories = countriesCategories;
        });
    }
    CountryOrdersComponent.prototype.selectCountryById = function (countryName) {
        var _this = this;
        this.countryName = countryName;
        this.countryOrderService.getCountriesCategoriesData(countryName)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (countryData) {
            _this.countryData = countryData;
        });
    };
    CountryOrdersComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    CountryOrdersComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-country-orders',
            styleUrls: ['./country-orders.component.scss'],
            template: "\n    <nb-card [size]=\"breakpoint.width >= breakpoints.md ? 'medium' : 'xxlarge'\">\n      <nb-card-header>Country Orders Statistics</nb-card-header>\n      <nb-card-body>\n        <ngx-country-orders-map (select)=\"selectCountryById($event)\"\n                                countryId=\"USA\">\n        </ngx-country-orders-map>\n        <ngx-country-orders-chart [countryName]=\"countryName\"\n                                  [data]=\"countryData\"\n                                  [labels]=\"countriesCategories\"\n                                  maxValue=\"20\">\n        </ngx-country-orders-chart>\n      </nb-card-body>\n    </nb-card>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            theme_1.NbMediaBreakpointsService,
            country_order_1.CountryOrderData])
    ], CountryOrdersComponent);
    return CountryOrdersComponent;
}());
exports.CountryOrdersComponent = CountryOrdersComponent;
//# sourceMappingURL=country-orders.component.js.map