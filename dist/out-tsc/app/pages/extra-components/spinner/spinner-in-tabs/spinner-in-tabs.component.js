"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SpinnerInTabsComponent = /** @class */ (function () {
    function SpinnerInTabsComponent() {
        this.loading = false;
    }
    SpinnerInTabsComponent.prototype.toggleLoadingAnimation = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () { return _this.loading = false; }, 1000);
    };
    SpinnerInTabsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-spinner-in-tabs',
            templateUrl: 'spinner-in-tabs.component.html',
            styleUrls: ['spinner-in-tabs.component.scss'],
        })
    ], SpinnerInTabsComponent);
    return SpinnerInTabsComponent;
}());
exports.SpinnerInTabsComponent = SpinnerInTabsComponent;
//# sourceMappingURL=spinner-in-tabs.component.js.map