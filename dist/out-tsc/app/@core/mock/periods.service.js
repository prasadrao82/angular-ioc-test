"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var PeriodsService = /** @class */ (function () {
    function PeriodsService() {
    }
    PeriodsService.prototype.getYears = function () {
        return [
            '2010', '2011', '2012',
            '2013', '2014', '2015',
            '2016', '2017', '2018',
        ];
    };
    PeriodsService.prototype.getMonths = function () {
        return [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec',
        ];
    };
    PeriodsService.prototype.getWeeks = function () {
        return [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun',
        ];
    };
    PeriodsService = tslib_1.__decorate([
        core_1.Injectable()
    ], PeriodsService);
    return PeriodsService;
}());
exports.PeriodsService = PeriodsService;
//# sourceMappingURL=periods.service.js.map