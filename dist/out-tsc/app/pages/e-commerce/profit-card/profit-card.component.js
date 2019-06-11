"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ProfitCardComponent = /** @class */ (function () {
    function ProfitCardComponent() {
        this.flipped = false;
    }
    ProfitCardComponent.prototype.toggleView = function () {
        this.flipped = !this.flipped;
    };
    ProfitCardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-profit-card',
            styleUrls: ['./profit-card.component.scss'],
            templateUrl: './profit-card.component.html',
        })
    ], ProfitCardComponent);
    return ProfitCardComponent;
}());
exports.ProfitCardComponent = ProfitCardComponent;
//# sourceMappingURL=profit-card.component.js.map