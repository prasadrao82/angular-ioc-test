"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var day_cell_component_1 = require("./day-cell/day-cell.component");
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(dateService) {
        this.dateService = dateService;
        this.date = new Date();
        this.date2 = new Date();
        this.dayCellComponent = day_cell_component_1.DayCellComponent;
        this.range = {
            start: this.dateService.addDay(this.monthStart, 3),
            end: this.dateService.addDay(this.monthEnd, -3),
        };
    }
    Object.defineProperty(CalendarComponent.prototype, "monthStart", {
        get: function () {
            return this.dateService.getMonthStart(new Date());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarComponent.prototype, "monthEnd", {
        get: function () {
            return this.dateService.getMonthEnd(new Date());
        },
        enumerable: true,
        configurable: true
    });
    CalendarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-calendar',
            templateUrl: 'calendar.component.html',
            styleUrls: ['calendar.component.scss'],
            entryComponents: [day_cell_component_1.DayCellComponent],
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbDateService])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map