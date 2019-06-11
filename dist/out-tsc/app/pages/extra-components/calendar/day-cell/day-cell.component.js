"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var DayCellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DayCellComponent, _super);
    function DayCellComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayCellComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-day-cell',
            templateUrl: 'day-cell.component.html',
            styleUrls: ['day-cell.component.scss'],
            host: { '(click)': 'onClick()', 'class': 'day-cell' },
        })
    ], DayCellComponent);
    return DayCellComponent;
}(theme_1.NbCalendarDayCellComponent));
exports.DayCellComponent = DayCellComponent;
//# sourceMappingURL=day-cell.component.js.map