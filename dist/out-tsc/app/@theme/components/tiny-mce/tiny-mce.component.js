"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var TinyMCEComponent = /** @class */ (function () {
    function TinyMCEComponent(host) {
        this.host = host;
        this.editorKeyup = new core_1.EventEmitter();
    }
    TinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            target: this.host.nativeElement,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    _this.editorKeyup.emit(editor.getContent());
                });
            },
            height: '320',
        });
    };
    TinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], TinyMCEComponent.prototype, "editorKeyup", void 0);
    TinyMCEComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-tiny-mce',
            template: '',
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
    ], TinyMCEComponent);
    return TinyMCEComponent;
}());
exports.TinyMCEComponent = TinyMCEComponent;
//# sourceMappingURL=tiny-mce.component.js.map