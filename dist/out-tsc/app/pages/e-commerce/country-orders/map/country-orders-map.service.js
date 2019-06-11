"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var CountryOrdersMapService = /** @class */ (function () {
    function CountryOrdersMapService(http) {
        this.http = http;
    }
    CountryOrdersMapService.prototype.getCords = function () {
        return this.http.get('./assets/leaflet-countries/countries.geo.json');
    };
    CountryOrdersMapService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], CountryOrdersMapService);
    return CountryOrdersMapService;
}());
exports.CountryOrdersMapService = CountryOrdersMapService;
//# sourceMappingURL=country-orders-map.service.js.map