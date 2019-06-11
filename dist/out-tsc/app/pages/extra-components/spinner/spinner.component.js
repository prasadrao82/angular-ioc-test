"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.loading = false;
    }
    SpinnerComponent.prototype.toggleLoadingAnimation = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () { return _this.loading = false; }, 3000);
    };
    SpinnerComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-spinner',
            templateUrl: 'spinner.component.html',
            styleUrls: ['spinner.component.scss'],
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map