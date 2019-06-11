"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var InteractiveProgressBarComponent = /** @class */ (function () {
    function InteractiveProgressBarComponent() {
        this.value = 25;
    }
    InteractiveProgressBarComponent.prototype.setValue = function (newValue) {
        this.value = Math.min(Math.max(newValue, 0), 100);
    };
    Object.defineProperty(InteractiveProgressBarComponent.prototype, "status", {
        get: function () {
            if (this.value <= 25) {
                return 'danger';
            }
            else if (this.value <= 50) {
                return 'warning';
            }
            else if (this.value <= 75) {
                return 'info';
            }
            else {
                return 'success';
            }
        },
        enumerable: true,
        configurable: true
    });
    InteractiveProgressBarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-interactive-progress-bar',
            templateUrl: 'interactive-progress-bar.component.html',
            styleUrls: ['interactive-progress-bar.component.scss'],
        })
    ], InteractiveProgressBarComponent);
    return InteractiveProgressBarComponent;
}());
exports.InteractiveProgressBarComponent = InteractiveProgressBarComponent;
//# sourceMappingURL=interactive-progress-bar.component.js.map