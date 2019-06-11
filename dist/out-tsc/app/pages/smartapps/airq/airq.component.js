"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AirqComponent = /** @class */ (function () {
    function AirqComponent() {
    }
    AirqComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    AirqComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-airq',
            templateUrl: './airq.component.html',
            styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
        })
    ], AirqComponent);
    return AirqComponent;
}());
exports.AirqComponent = AirqComponent;
//# sourceMappingURL=airq.component.js.map