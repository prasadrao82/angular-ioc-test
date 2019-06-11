"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var modal_component_1 = require("./modal/modal.component");
var ModalsComponent = /** @class */ (function () {
    function ModalsComponent(modalService) {
        this.modalService = modalService;
    }
    ModalsComponent.prototype.showLargeModal = function () {
        var activeModal = this.modalService.open(modal_component_1.ModalComponent, { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Large Modal';
    };
    ModalsComponent.prototype.showSmallModal = function () {
        var activeModal = this.modalService.open(modal_component_1.ModalComponent, { size: 'sm', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Small Modal';
    };
    ModalsComponent.prototype.showStaticModal = function () {
        var activeModal = this.modalService.open(modal_component_1.ModalComponent, {
            size: 'sm',
            backdrop: 'static',
            container: 'nb-layout',
        });
        activeModal.componentInstance.modalHeader = 'Static modal';
        activeModal.componentInstance.modalContent = "This is static modal, backdrop click\n                                                    will not close it. Click \u00D7 or confirmation button to close modal.";
    };
    ModalsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-modals',
            styleUrls: ['./modals.component.scss'],
            templateUrl: './modals.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
    ], ModalsComponent);
    return ModalsComponent;
}());
exports.ModalsComponent = ModalsComponent;
//# sourceMappingURL=modals.component.js.map