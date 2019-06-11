"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var temperature_humidity_1 = require("../data/temperature-humidity");
var TemperatureHumidityService = /** @class */ (function (_super) {
    tslib_1.__extends(TemperatureHumidityService, _super);
    function TemperatureHumidityService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        _this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
        return _this;
    }
    TemperatureHumidityService.prototype.getTemperatureData = function () {
        return rxjs_1.of(this.temperatureDate);
    };
    TemperatureHumidityService.prototype.getHumidityData = function () {
        return rxjs_1.of(this.humidityDate);
    };
    TemperatureHumidityService = tslib_1.__decorate([
        core_1.Injectable()
    ], TemperatureHumidityService);
    return TemperatureHumidityService;
}(temperature_humidity_1.TemperatureHumidityData));
exports.TemperatureHumidityService = TemperatureHumidityService;
//# sourceMappingURL=temperature-humidity.service.js.map