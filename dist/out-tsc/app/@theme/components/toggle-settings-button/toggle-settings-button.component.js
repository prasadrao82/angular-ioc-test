"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var utils_1 = require("../../../@core/utils");
var ToggleSettingsButtonComponent = /** @class */ (function () {
    function ToggleSettingsButtonComponent(sidebarService, stateService) {
        var _this = this;
        this.sidebarService = sidebarService;
        this.stateService = stateService;
        this.sidebarEnd = false;
        this.expanded = false;
        this.wasExpanded = false;
        this.stateService.onSidebarState()
            .subscribe(function (_a) {
            var id = _a.id;
            _this.sidebarEnd = id === 'end';
        });
    }
    ToggleSettingsButtonComponent.prototype.toggleSettings = function () {
        this.sidebarService.toggle(false, 'settings-sidebar');
        this.expanded = !this.expanded;
        this.wasExpanded = true;
    };
    ToggleSettingsButtonComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-toggle-settings-button',
            styleUrls: ['./toggle-settings-button.component.scss'],
            template: "\n    <button class=\"toggle-settings\"\n            (click)=\"toggleSettings()\"\n            [class.expanded]=\"expanded\"\n            [class.sidebar-end]=\"sidebarEnd\"\n            [class.was-expanded]=\"wasExpanded\"\n    >\n      <i class=\"nb-gear\"></i>\n    </button>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbSidebarService, utils_1.StateService])
    ], ToggleSettingsButtonComponent);
    return ToggleSettingsButtonComponent;
}());
exports.ToggleSettingsButtonComponent = ToggleSettingsButtonComponent;
//# sourceMappingURL=toggle-settings-button.component.js.map