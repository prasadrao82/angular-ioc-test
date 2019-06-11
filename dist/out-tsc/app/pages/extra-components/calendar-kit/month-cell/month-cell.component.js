"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var common_1 = require("@angular/common");
var CalendarKitMonthCellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarKitMonthCellComponent, _super);
    function CalendarKitMonthCellComponent(dateService, monthModel) {
        var _this = _super.call(this, monthModel) || this;
        _this.dateService = dateService;
        _this.select = new core_1.EventEmitter();
        return _this;
    }
    Object.defineProperty(CalendarKitMonthCellComponent.prototype, "title", {
        get: function () {
            return this.dateService.getMonthName(this.date, common_1.TranslationWidth.Wide);
        },
        enumerable: true,
        configurable: true
    });
    CalendarKitMonthCellComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-calendar-kit-month-cell',
            styleUrls: ['month-cell.component.scss'],
            templateUrl: 'month-cell.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbDateService, theme_1.NbCalendarMonthModelService])
    ], CalendarKitMonthCellComponent);
    return CalendarKitMonthCellComponent;
}(theme_1.NbCalendarDayPickerComponent));
exports.CalendarKitMonthCellComponent = CalendarKitMonthCellComponent;
//# sourceMappingURL=month-cell.component.js.map