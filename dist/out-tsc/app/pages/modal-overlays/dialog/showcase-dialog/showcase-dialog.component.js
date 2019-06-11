"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var ShowcaseDialogComponent = /** @class */ (function () {
    function ShowcaseDialogComponent(ref) {
        this.ref = ref;
    }
    ShowcaseDialogComponent.prototype.dismiss = function () {
        this.ref.close();
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ShowcaseDialogComponent.prototype, "title", void 0);
    ShowcaseDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-showcase-dialog',
            templateUrl: 'showcase-dialog.component.html',
            styleUrls: ['showcase-dialog.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbDialogRef])
    ], ShowcaseDialogComponent);
    return ShowcaseDialogComponent;
}());
exports.ShowcaseDialogComponent = ShowcaseDialogComponent;
//# sourceMappingURL=showcase-dialog.component.js.map