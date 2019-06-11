"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
require("style-loader!angular2-toaster/toaster.css");
var theme_1 = require("@nebular/theme");
var model_1 = require("@nebular/theme/components/toastr/model");
var ToastrComponent = /** @class */ (function () {
    function ToastrComponent(toastrService) {
        this.toastrService = toastrService;
        this.index = 1;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = theme_1.NbGlobalPhysicalPosition.TOP_RIGHT;
        this.preventDuplicates = false;
        this.status = model_1.NbToastStatus.SUCCESS;
        this.title = 'HI there!';
        this.content = "I'm cool toaster!";
        this.types = [
            model_1.NbToastStatus.DEFAULT,
            model_1.NbToastStatus.DANGER,
            model_1.NbToastStatus.INFO,
            model_1.NbToastStatus.PRIMARY,
            model_1.NbToastStatus.SUCCESS,
            model_1.NbToastStatus.WARNING,
        ];
        this.positions = [
            theme_1.NbGlobalPhysicalPosition.TOP_RIGHT,
            theme_1.NbGlobalPhysicalPosition.TOP_LEFT,
            theme_1.NbGlobalPhysicalPosition.BOTTOM_LEFT,
            theme_1.NbGlobalPhysicalPosition.BOTTOM_RIGHT,
            theme_1.NbGlobalLogicalPosition.TOP_END,
            theme_1.NbGlobalLogicalPosition.TOP_START,
            theme_1.NbGlobalLogicalPosition.BOTTOM_END,
            theme_1.NbGlobalLogicalPosition.BOTTOM_START,
        ];
        this.quotes = [
            { title: null, body: 'We rock at Angular' },
            { title: null, body: 'Titles are not always needed' },
            { title: null, body: 'Toastr rock!' },
        ];
    }
    ToastrComponent.prototype.makeToast = function () {
        this.showToast(this.status, this.title, this.content);
    };
    ToastrComponent.prototype.openRandomToast = function () {
        var typeIndex = Math.floor(Math.random() * this.types.length);
        var quoteIndex = Math.floor(Math.random() * this.quotes.length);
        var type = this.types[typeIndex];
        var quote = this.quotes[quoteIndex];
        this.showToast(type, quote.title, quote.body);
    };
    ToastrComponent.prototype.showToast = function (type, title, body) {
        var config = {
            status: type,
            destroyByClick: this.destroyByClick,
            duration: this.duration,
            hasIcon: this.hasIcon,
            position: this.position,
            preventDuplicates: this.preventDuplicates,
        };
        var titleContent = title ? ". " + title : '';
        this.index += 1;
        this.toastrService.show(body, "Toast " + this.index + titleContent, config);
    };
    ToastrComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-toastr',
            styleUrls: ['./toastr.component.scss'],
            templateUrl: './toastr.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbToastrService])
    ], ToastrComponent);
    return ToastrComponent;
}());
exports.ToastrComponent = ToastrComponent;
//# sourceMappingURL=toastr.component.js.map