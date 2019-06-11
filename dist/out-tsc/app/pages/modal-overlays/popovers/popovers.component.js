"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var popover_examples_component_1 = require("./popover-examples.component");
var PopoversComponent = /** @class */ (function () {
    function PopoversComponent() {
        this.tabsComponent = popover_examples_component_1.NgxPopoverTabsComponent;
        this.cardComponent = popover_examples_component_1.NgxPopoverCardComponent;
        this.formComponent = popover_examples_component_1.NgxPopoverFormComponent;
    }
    PopoversComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-popovers',
            styleUrls: ['./popovers.component.scss'],
            templateUrl: './popovers.component.html',
        })
    ], PopoversComponent);
    return PopoversComponent;
}());
exports.PopoversComponent = PopoversComponent;
//# sourceMappingURL=popovers.component.js.map