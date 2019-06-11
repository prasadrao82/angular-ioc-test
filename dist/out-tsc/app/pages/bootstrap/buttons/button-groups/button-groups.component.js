"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ButtonGroupsComponent = /** @class */ (function () {
    function ButtonGroupsComponent() {
        this.radioModel = 'left';
        this.checkboxModel = {
            left: false,
            middle: false,
            right: false,
        };
        this.dividedCheckboxModel = {
            monday: true,
            tuesday: true,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
        };
        this.paginationModel = 1;
        this.iconToolbarModel = {
            one: false,
            two: false,
            three: true,
            four: false,
            five: false,
        };
        this.dividedButtonGroupOne = 'left';
        this.dividedButtonGroupTwo = {
            left: false,
            middle: false,
            right: false,
        };
    }
    ButtonGroupsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-button-groups',
            styleUrls: ['./button-groups.component.scss'],
            templateUrl: './button-groups.component.html',
        })
    ], ButtonGroupsComponent);
    return ButtonGroupsComponent;
}());
exports.ButtonGroupsComponent = ButtonGroupsComponent;
//# sourceMappingURL=button-groups.component.js.map