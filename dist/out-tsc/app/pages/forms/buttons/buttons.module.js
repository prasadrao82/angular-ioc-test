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
var action_groups_component_1 = require("./action-groups/action-groups.component");
var labeled_actions_group_component_1 = require("./labeled-actions-group/labeled-actions-group.component");
var outline_buttons_component_1 = require("./outline-buttons/outline-buttons.component");
var button_elements_component_1 = require("./button-elements/button-elements.component");
var components = [
    buttons_component_1.ButtonsComponent,
    default_buttons_component_1.DefaultButtonsComponent,
    outline_buttons_component_1.OutlineButtonsComponent,
    hero_buttons_component_1.HeroButtonComponent,
    shape_buttons_component_1.ShapeButtonsComponent,
    size_buttons_component_1.SizeButtonsComponent,
    action_groups_component_1.ActionGroupsComponent,
    labeled_actions_group_component_1.LabeledActionsGroupComponent,
    button_elements_component_1.ButtonElementsComponent,
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