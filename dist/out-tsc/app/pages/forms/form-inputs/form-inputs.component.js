"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FormInputsComponent = /** @class */ (function () {
    function FormInputsComponent() {
        this.starRate = 2;
        this.heartRate = 4;
        this.radioGroupValue = 'This is value 2';
    }
    FormInputsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-form-inputs',
            styleUrls: ['./form-inputs.component.scss'],
            templateUrl: './form-inputs.component.html',
        })
    ], FormInputsComponent);
    return FormInputsComponent;
}());
exports.FormInputsComponent = FormInputsComponent;
//# sourceMappingURL=form-inputs.component.js.map