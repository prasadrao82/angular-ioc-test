"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_module_1 = require("../../@theme/theme.module");
var ui_features_routing_module_1 = require("./ui-features-routing.module");
var ui_features_component_1 = require("./ui-features.component");
var grid_component_1 = require("./grid/grid.component");
var icons_component_1 = require("./icons/icons.component");
var typography_component_1 = require("./typography/typography.component");
var search_fields_component_1 = require("./search-fields/search-fields.component");
var components = [
    ui_features_component_1.UiFeaturesComponent,
    grid_component_1.GridComponent,
    icons_component_1.IconsComponent,
    typography_component_1.TypographyComponent,
    search_fields_component_1.SearchComponent,
];
var UiFeaturesModule = /** @class */ (function () {
    function UiFeaturesModule() {
    }
    UiFeaturesModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                ui_features_routing_module_1.UiFeaturesRoutingModule,
            ],
            declarations: components.slice(),
        })
    ], UiFeaturesModule);
    return UiFeaturesModule;
}());
exports.UiFeaturesModule = UiFeaturesModule;
//# sourceMappingURL=ui-features.module.js.map