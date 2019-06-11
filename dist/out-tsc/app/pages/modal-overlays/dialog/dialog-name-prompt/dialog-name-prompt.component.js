"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var DialogNamePromptComponent = /** @class */ (function () {
    function DialogNamePromptComponent(ref) {
        this.ref = ref;
    }
    DialogNamePromptComponent.prototype.cancel = function () {
        this.ref.close();
    };
    DialogNamePromptComponent.prototype.submit = function (name) {
        this.ref.close(name);
    };
    DialogNamePromptComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-dialog-name-prompt',
            templateUrl: 'dialog-name-prompt.component.html',
            styleUrls: ['dialog-name-prompt.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbDialogRef])
    ], DialogNamePromptComponent);
    return DialogNamePromptComponent;
}());
exports.DialogNamePromptComponent = DialogNamePromptComponent;
//# sourceMappingURL=dialog-name-prompt.component.js.map