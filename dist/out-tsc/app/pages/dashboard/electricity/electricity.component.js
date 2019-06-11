"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var electricity_1 = require("../../../@core/data/electricity");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ElectricityComponent = /** @class */ (function () {
    function ElectricityComponent(electricityService, themeService) {
        var _this = this;
        this.electricityService = electricityService;
        this.themeService = themeService;
        this.alive = true;
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
        rxjs_1.forkJoin(this.electricityService.getListData(), this.electricityService.getChartData())
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var listData = _a[0], chartData = _a[1];
            _this.listData = listData;
            _this.chartData = chartData;
        });
    }
    ElectricityComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ElectricityComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-electricity',
            styleUrls: ['./electricity.component.scss'],
            templateUrl: './electricity.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [electricity_1.ElectricityData,
            theme_1.NbThemeService])
    ], ElectricityComponent);
    return ElectricityComponent;
}());
exports.ElectricityComponent = ElectricityComponent;
//# sourceMappingURL=electricity.component.js.map