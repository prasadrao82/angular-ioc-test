"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var StatusCardComponent = /** @class */ (function () {
    function StatusCardComponent() {
        this.on = true;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], StatusCardComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], StatusCardComponent.prototype, "type", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], StatusCardComponent.prototype, "on", void 0);
    StatusCardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-status-card',
            styleUrls: ['./status-card.component.scss'],
            template: "\n    <nb-card (click)=\"on = !on\" [ngClass]=\"{'off': !on}\">\n      <div class=\"icon-container\">\n        <div class=\"icon {{ type }}\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n\n      <div class=\"details\">\n        <div class=\"title\">{{ title }}</div>\n        <div class=\"status\">{{ on ? 'ON' : 'OFF' }}</div>\n      </div>\n    </nb-card>\n  ",
        })
    ], StatusCardComponent);
    return StatusCardComponent;
}());
exports.StatusCardComponent = StatusCardComponent;
//# sourceMappingURL=status-card.component.js.map