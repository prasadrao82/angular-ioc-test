"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var temperature_humidity_1 = require("../../../@core/data/temperature-humidity");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var TemperatureComponent = /** @class */ (function () {
    function TemperatureComponent(theme, temperatureHumidityService) {
        var _this = this;
        this.theme = theme;
        this.temperatureHumidityService = temperatureHumidityService;
        this.alive = true;
        this.temperatureOff = false;
        this.temperatureMode = 'cool';
        this.humidityOff = false;
        this.humidityMode = 'heat';
        this.theme.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (config) {
            _this.colors = config.variables;
        });
        rxjs_1.forkJoin(this.temperatureHumidityService.getTemperatureData(), this.temperatureHumidityService.getHumidityData())
            .subscribe(function (_a) {
            var temperatureData = _a[0], humidityData = _a[1];
            _this.temperatureData = temperatureData;
            _this.temperature = _this.temperatureData.value;
            _this.humidityData = humidityData;
            _this.humidity = _this.humidityData.value;
        });
    }
    TemperatureComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TemperatureComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-temperature',
            styleUrls: ['./temperature.component.scss'],
            templateUrl: './temperature.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            temperature_humidity_1.TemperatureHumidityData])
    ], TemperatureComponent);
    return TemperatureComponent;
}());
exports.TemperatureComponent = TemperatureComponent;
//# sourceMappingURL=temperature.component.js.map