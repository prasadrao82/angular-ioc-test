"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_ckeditor_1 = require("ng2-ckeditor");
var theme_module_1 = require("../../@theme/theme.module");
var editors_routing_module_1 = require("./editors-routing.module");
var EditorsModule = /** @class */ (function () {
    function EditorsModule() {
    }
    EditorsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                editors_routing_module_1.EditorsRoutingModule,
                ng2_ckeditor_1.CKEditorModule,
            ],
            declarations: editors_routing_module_1.routedComponents.slice(),
        })
    ], EditorsModule);
    return EditorsModule;
}());
exports.EditorsModule = EditorsModule;
//# sourceMappingURL=editors.module.js.map