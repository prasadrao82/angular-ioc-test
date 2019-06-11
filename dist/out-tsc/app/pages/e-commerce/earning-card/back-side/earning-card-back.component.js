"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var earning_1 = require("../../../../@core/data/earning");
var operators_1 = require("rxjs/operators");
var EarningCardBackComponent = /** @class */ (function () {
    function EarningCardBackComponent(earningService) {
        var _this = this;
        this.earningService = earningService;
        this.alive = true;
        this.defaultSelectedCurrency = 'Bitcoin';
        this.earningService.getEarningPieChartData()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (earningPieChartData) {
            _this.earningPieChartData = earningPieChartData;
        });
    }
    EarningCardBackComponent.prototype.changeChartInfo = function (pieData) {
        this.value = pieData.value;
        this.name = pieData.name;
        this.color = pieData.color;
    };
    EarningCardBackComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    EarningCardBackComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-earning-card-back',
            styleUrls: ['./earning-card-back.component.scss'],
            templateUrl: './earning-card-back.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [earning_1.EarningData])
    ], EarningCardBackComponent);
    return EarningCardBackComponent;
}());
exports.EarningCardBackComponent = EarningCardBackComponent;
//# sourceMappingURL=earning-card-back.component.js.map