"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SpinnerInButtonsComponent = /** @class */ (function () {
    function SpinnerInButtonsComponent() {
        this.loadingLargeGroup = false;
        this.loadingMediumGroup = false;
    }
    SpinnerInButtonsComponent.prototype.toggleLoadingLargeGroupAnimation = function () {
        var _this = this;
        this.loadingLargeGroup = true;
        setTimeout(function () { return _this.loadingLargeGroup = false; }, 3000);
    };
    SpinnerInButtonsComponent.prototype.toggleLoadingMediumGroupAnimation = function () {
        var _this = this;
        this.loadingMediumGroup = true;
        setTimeout(function () { return _this.loadingMediumGroup = false; }, 3000);
    };
    SpinnerInButtonsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-spinner-in-buttons',
            templateUrl: 'spinner-in-buttons.component.html',
            styleUrls: ['spinner-in-buttons.component.scss'],
        })
    ], SpinnerInButtonsComponent);
    return SpinnerInButtonsComponent;
}());
exports.SpinnerInButtonsComponent = SpinnerInButtonsComponent;
//# sourceMappingURL=spinner-in-buttons.component.js.map