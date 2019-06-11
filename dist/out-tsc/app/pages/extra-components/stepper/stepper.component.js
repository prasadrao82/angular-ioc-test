"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var StepperComponent = /** @class */ (function () {
    function StepperComponent(fb) {
        this.fb = fb;
    }
    StepperComponent.prototype.ngOnInit = function () {
        this.firstForm = this.fb.group({
            firstCtrl: ['', forms_1.Validators.required],
        });
        this.secondForm = this.fb.group({
            secondCtrl: ['', forms_1.Validators.required],
        });
        this.thirdForm = this.fb.group({
            thirdCtrl: ['', forms_1.Validators.required],
        });
    };
    StepperComponent.prototype.onFirstSubmit = function () {
        this.firstForm.markAsDirty();
    };
    StepperComponent.prototype.onSecondSubmit = function () {
        this.secondForm.markAsDirty();
    };
    StepperComponent.prototype.onThirdSubmit = function () {
        this.thirdForm.markAsDirty();
    };
    StepperComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-stepper',
            templateUrl: 'stepper.component.html',
            styleUrls: ['stepper.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder])
    ], StepperComponent);
    return StepperComponent;
}());
exports.StepperComponent = StepperComponent;
//# sourceMappingURL=stepper.component.js.map