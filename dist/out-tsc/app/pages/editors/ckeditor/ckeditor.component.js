"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
require("./ckeditor.loader");
require("ckeditor");
var CKEditorComponent = /** @class */ (function () {
    function CKEditorComponent() {
    }
    CKEditorComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-ckeditor',
            template: "\n    <nb-card>\n      <nb-card-header>\n        CKEditor\n      </nb-card-header>\n      <nb-card-body>\n        <ckeditor [config]=\"{ extraPlugins: 'divarea', height: '320' }\"></ckeditor>\n      </nb-card-body>\n    </nb-card>\n  ",
        })
    ], CKEditorComponent);
    return CKEditorComponent;
}());
exports.CKEditorComponent = CKEditorComponent;
//# sourceMappingURL=ckeditor.component.js.map