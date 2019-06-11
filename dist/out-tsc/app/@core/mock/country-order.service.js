"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var country_order_1 = require("../data/country-order");
var CountryOrderService = /** @class */ (function (_super) {
    tslib_1.__extends(CountryOrderService, _super);
    function CountryOrderService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        _this.countriesCategoriesLength = _this.countriesCategories.length;
        return _this;
    }
    CountryOrderService.prototype.generateRandomData = function (nPoints) {
        return Array.from(Array(nPoints)).map(function () {
            return Math.round(Math.random() * 20);
        });
    };
    CountryOrderService.prototype.getCountriesCategories = function () {
        return rxjs_1.of(this.countriesCategories);
    };
    CountryOrderService.prototype.getCountriesCategoriesData = function (country) {
        return rxjs_1.of(this.generateRandomData(this.countriesCategoriesLength));
    };
    CountryOrderService = tslib_1.__decorate([
        core_1.Injectable()
    ], CountryOrderService);
    return CountryOrderService;
}(country_order_1.CountryOrderData));
exports.CountryOrderService = CountryOrderService;
//# sourceMappingURL=country-order.service.js.map