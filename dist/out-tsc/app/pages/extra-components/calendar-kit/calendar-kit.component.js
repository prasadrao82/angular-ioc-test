"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var month_cell_component_1 = require("./month-cell/month-cell.component");
var CalendarKitFullCalendarShowcaseComponent = /** @class */ (function () {
    function CalendarKitFullCalendarShowcaseComponent() {
        this.month = new Date();
        this.monthCellComponent = month_cell_component_1.CalendarKitMonthCellComponent;
    }
    CalendarKitFullCalendarShowcaseComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-calendar-kit',
            templateUrl: 'calendar-kit.component.html',
            styleUrls: ['calendar-kit.component.scss'],
            entryComponents: [month_cell_component_1.CalendarKitMonthCellComponent],
        })
    ], CalendarKitFullCalendarShowcaseComponent);
    return CalendarKitFullCalendarShowcaseComponent;
}());
exports.CalendarKitFullCalendarShowcaseComponent = CalendarKitFullCalendarShowcaseComponent;
//# sourceMappingURL=calendar-kit.component.js.map