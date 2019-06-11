"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var TrafficBarComponent = /** @class */ (function () {
    function TrafficBarComponent() {
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], TrafficBarComponent.prototype, "barData", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], TrafficBarComponent.prototype, "successDelta", void 0);
    TrafficBarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-traffic-bar',
            styleUrls: ['./traffic-bar.component.scss'],
            templateUrl: './traffic-bar.component.html',
        })
    ], TrafficBarComponent);
    return TrafficBarComponent;
}());
exports.TrafficBarComponent = TrafficBarComponent;
//# sourceMappingURL=traffic-bar.component.js.map