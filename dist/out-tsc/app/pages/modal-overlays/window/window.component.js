"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var window_form_component_1 = require("./window-form/window-form.component");
var WindowComponent = /** @class */ (function () {
    function WindowComponent(windowService) {
        this.windowService = windowService;
    }
    WindowComponent.prototype.openWindow = function (contentTemplate) {
        this.windowService.open(contentTemplate, {
            title: 'Window content from template',
            context: {
                text: 'some text to pass into template',
            },
        });
    };
    WindowComponent.prototype.openWindowForm = function () {
        this.windowService.open(window_form_component_1.WindowFormComponent, { title: "Window" });
    };
    WindowComponent.prototype.openWindowWithoutBackdrop = function () {
        this.windowService.open(this.disabledEscTemplate, {
            title: 'Window without backdrop',
            hasBackdrop: false,
            closeOnEsc: false,
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild('contentTemplate'),
        tslib_1.__metadata("design:type", core_1.TemplateRef)
    ], WindowComponent.prototype, "contentTemplate", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('disabledEsc', { read: core_1.TemplateRef }),
        tslib_1.__metadata("design:type", core_1.TemplateRef)
    ], WindowComponent.prototype, "disabledEscTemplate", void 0);
    WindowComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-window',
            templateUrl: 'window.component.html',
            styleUrls: ['window.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbWindowService])
    ], WindowComponent);
    return WindowComponent;
}());
exports.WindowComponent = WindowComponent;
//# sourceMappingURL=window.component.js.map