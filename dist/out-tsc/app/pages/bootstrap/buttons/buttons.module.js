"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_module_1 = require("../../../@theme/theme.module");
var default_buttons_component_1 = require("./default-buttons/default-buttons.component");
var hero_buttons_component_1 = require("./hero-buttons/hero-buttons.component");
var shape_buttons_component_1 = require("./shape-buttons/shape-buttons.component");
var size_buttons_component_1 = require("./size-buttons/size-buttons.component");
var buttons_component_1 = require("./buttons.component");
var dropdown_button_component_1 = require("./dropdown-buttons/dropdown-button.component");
var block_level_buttons_component_1 = require("./block-level-buttons/block-level-buttons.component");
var button_groups_component_1 = require("./button-groups/button-groups.component");
var icon_buttons_component_1 = require("./icon-buttons/icon-buttons.component");
var components = [
    buttons_component_1.ButtonsComponent,
    default_buttons_component_1.DefaultButtonsComponent,
    hero_buttons_component_1.HeroButtonComponent,
    shape_buttons_component_1.ShapeButtonsComponent,
    size_buttons_component_1.SizeButtonsComponent,
    dropdown_button_component_1.DropdownButtonsComponent,
    block_level_buttons_component_1.BlockLevelButtonsComponent,
    button_groups_component_1.ButtonGroupsComponent,
    icon_buttons_component_1.IconButtonsComponent,
];
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
            ],
            exports: components.slice(),
            declarations: components.slice(),
            providers: [],
        })
    ], ButtonsModule);
    return ButtonsModule;
}());
exports.ButtonsModule = ButtonsModule;
//# sourceMappingURL=buttons.module.js.map