"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.toggle = function () {
        this.accordion.toggle();
    };
    tslib_1.__decorate([
        core_1.ViewChild('item'),
        tslib_1.__metadata("design:type", Object)
    ], AccordionComponent.prototype, "accordion", void 0);
    AccordionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-accordion',
            templateUrl: 'accordion.component.html',
            styleUrls: ['accordion.component.scss'],
        })
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
//# sourceMappingURL=accordion.component.js.map