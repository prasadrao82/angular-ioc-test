"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var EarningCardComponent = /** @class */ (function () {
    function EarningCardComponent() {
        this.flipped = false;
    }
    EarningCardComponent.prototype.toggleFlipView = function () {
        this.flipped = !this.flipped;
    };
    EarningCardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-earning-card',
            styleUrls: ['./earning-card.component.scss'],
            templateUrl: './earning-card.component.html',
        })
    ], EarningCardComponent);
    return EarningCardComponent;
}());
exports.EarningCardComponent = EarningCardComponent;
//# sourceMappingURL=earning-card.component.js.map