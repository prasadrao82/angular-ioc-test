"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var editors_component_1 = require("./editors.component");
var tiny_mce_component_1 = require("./tiny-mce/tiny-mce.component");
var ckeditor_component_1 = require("./ckeditor/ckeditor.component");
var routes = [{
        path: '',
        component: editors_component_1.EditorsComponent,
        children: [{
                path: 'tinymce',
                component: tiny_mce_component_1.TinyMCEComponent,
            }, {
                path: 'ckeditor',
                component: ckeditor_component_1.CKEditorComponent,
            }],
    }];
var EditorsRoutingModule = /** @class */ (function () {
    function EditorsRoutingModule() {
    }
    EditorsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], EditorsRoutingModule);
    return EditorsRoutingModule;
}());
exports.EditorsRoutingModule = EditorsRoutingModule;
exports.routedComponents = [
    editors_component_1.EditorsComponent,
    tiny_mce_component_1.TinyMCEComponent,
    ckeditor_component_1.CKEditorComponent,
];
//# sourceMappingURL=editors-routing.module.js.map