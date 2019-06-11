"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var DefaultButtonsComponent = /** @class */ (function () {
    function DefaultButtonsComponent() {
        this.buttons = [
            {
                status: 'primary',
                container: 'primary-container',
                containerTitle: 'Primary Button',
                title: 'Primary',
                default: '#7659ff',
            },
            {
                status: 'warning',
                container: 'warning-container',
                containerTitle: 'Warning Button',
                title: 'Warning',
                default: '#ffcb17',
            },
            {
                status: 'success',
                container: 'success-container',
                containerTitle: 'Success Button',
                title: 'Success',
                default: '#00d977',
            },
            {
                status: 'info',
                container: 'info-container',
                containerTitle: 'Info Button',
                title: 'Info',
                default: '#0088ff',
            },
            {
                status: 'danger',
                container: 'danger-container',
                containerTitle: 'Danger Button',
                title: 'Danger',
                default: '#ff386a',
            },
        ];
    }
    DefaultButtonsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-default-buttons',
            styleUrls: ['./default-buttons.component.scss'],
            templateUrl: './default-buttons.component.html',
        })
    ], DefaultButtonsComponent);
    return DefaultButtonsComponent;
}());
exports.DefaultButtonsComponent = DefaultButtonsComponent;
//# sourceMappingURL=default-buttons.component.js.map