"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(dateService) {
        this.dateService = dateService;
        this.min = this.dateService.addDay(this.dateService.today(), -5);
        this.max = this.dateService.addDay(this.dateService.today(), 5);
    }
    DatepickerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-datepicker',
            templateUrl: 'datepicker.component.html',
            styleUrls: ['datepicker.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbDateService])
    ], DatepickerComponent);
    return DatepickerComponent;
}());
exports.DatepickerComponent = DatepickerComponent;
//# sourceMappingURL=datepicker.component.js.map