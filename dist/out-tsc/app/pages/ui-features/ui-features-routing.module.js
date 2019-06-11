"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ui_features_component_1 = require("./ui-features.component");
var grid_component_1 = require("./grid/grid.component");
var icons_component_1 = require("./icons/icons.component");
var typography_component_1 = require("./typography/typography.component");
var search_fields_component_1 = require("./search-fields/search-fields.component");
var routes = [{
        path: '',
        component: ui_features_component_1.UiFeaturesComponent,
        children: [{
                path: 'grid',
                component: grid_component_1.GridComponent,
            }, {
                path: 'icons',
                component: icons_component_1.IconsComponent,
            }, {
                path: 'typography',
                component: typography_component_1.TypographyComponent,
            }, {
                path: 'search-fields',
                component: search_fields_component_1.SearchComponent,
            }],
    }];
var UiFeaturesRoutingModule = /** @class */ (function () {
    function UiFeaturesRoutingModule() {
    }
    UiFeaturesRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], UiFeaturesRoutingModule);
    return UiFeaturesRoutingModule;
}());
exports.UiFeaturesRoutingModule = UiFeaturesRoutingModule;
//# sourceMappingURL=ui-features-routing.module.js.map