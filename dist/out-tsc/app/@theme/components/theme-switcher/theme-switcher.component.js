"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var themes_switcher_list_component_1 = require("./themes-switcher-list/themes-switcher-list.component");
var ThemeSwitcherComponent = /** @class */ (function () {
    function ThemeSwitcherComponent() {
        this.showTitle = true;
        this.switcherListComponent = themes_switcher_list_component_1.ThemeSwitcherListComponent;
    }
    tslib_1.__decorate([
        core_1.ViewChild(theme_1.NbPopoverDirective),
        tslib_1.__metadata("design:type", theme_1.NbPopoverDirective)
    ], ThemeSwitcherComponent.prototype, "popover", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ThemeSwitcherComponent.prototype, "showTitle", void 0);
    ThemeSwitcherComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-theme-switcher',
            templateUrl: './theme-switcher.component.html',
            styleUrls: ['./theme-switcher.component.scss'],
        })
    ], ThemeSwitcherComponent);
    return ThemeSwitcherComponent;
}());
exports.ThemeSwitcherComponent = ThemeSwitcherComponent;
//# sourceMappingURL=theme-switcher.component.js.map