"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ModalComponent = /** @class */ (function () {
    function ModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.modalContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy\n    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis\n    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";
    }
    ModalComponent.prototype.closeModal = function () {
        this.activeModal.close();
    };
    ModalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-modal',
            template: "\n    <div class=\"modal-header\">\n      <span>{{ modalHeader }}</span>\n      <button class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      {{ modalContent }}\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-md btn-primary\" (click)=\"closeModal()\">Save changes</button>\n    </div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map