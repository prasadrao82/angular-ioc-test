"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var showcase_dialog_component_1 = require("./showcase-dialog/showcase-dialog.component");
var dialog_name_prompt_component_1 = require("./dialog-name-prompt/dialog-name-prompt.component");
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogService) {
        this.dialogService = dialogService;
        this.names = [];
    }
    DialogComponent.prototype.open = function () {
        this.dialogService.open(showcase_dialog_component_1.ShowcaseDialogComponent, {
            context: {
                title: 'This is a title passed to the dialog component',
            },
        });
    };
    DialogComponent.prototype.open2 = function (dialog) {
        this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
    };
    DialogComponent.prototype.open3 = function () {
        var _this = this;
        this.dialogService.open(dialog_name_prompt_component_1.DialogNamePromptComponent)
            .onClose.subscribe(function (name) { return name && _this.names.push(name); });
    };
    DialogComponent.prototype.openWithoutBackdrop = function (dialog) {
        this.dialogService.open(dialog, {
            context: 'this is some additional data passed to dialog',
            hasBackdrop: false,
        });
    };
    DialogComponent.prototype.openWithoutBackdropClick = function (dialog) {
        this.dialogService.open(dialog, {
            context: 'this is some additional data passed to dialog',
            closeOnBackdropClick: false,
        });
    };
    DialogComponent.prototype.openWithoutEscClose = function (dialog) {
        this.dialogService.open(dialog, {
            context: 'this is some additional data passed to dialog',
            closeOnEsc: false,
        });
    };
    DialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-dialog',
            templateUrl: 'dialog.component.html',
            styleUrls: ['dialog.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbDialogService])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
//# sourceMappingURL=dialog.component.js.map