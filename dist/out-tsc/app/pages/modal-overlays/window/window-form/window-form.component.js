"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var WindowFormComponent = /** @class */ (function () {
    function WindowFormComponent(windowRef) {
        this.windowRef = windowRef;
    }
    WindowFormComponent.prototype.close = function () {
        this.windowRef.close();
    };
    WindowFormComponent = tslib_1.__decorate([
        core_1.Component({
            template: "\n    <form class=\"form\">\n      <label for=\"subject\">Subject:</label>\n      <input nbInput id=\"subject\" type=\"text\">\n\n      <label class=\"text-label\" for=\"text\">Text:</label>\n      <textarea nbInput id=\"text\"></textarea>\n    </form>\n  ",
            styleUrls: ['window-form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbWindowRef])
    ], WindowFormComponent);
    return WindowFormComponent;
}());
exports.WindowFormComponent = WindowFormComponent;
//# sourceMappingURL=window-form.component.js.map