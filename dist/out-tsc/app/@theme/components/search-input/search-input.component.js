"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new core_1.EventEmitter();
        this.isInputShown = false;
    }
    SearchInputComponent.prototype.showInput = function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    SearchInputComponent.prototype.hideInput = function () {
        this.isInputShown = false;
    };
    SearchInputComponent.prototype.onInput = function (val) {
        this.search.emit(val);
    };
    tslib_1.__decorate([
        core_1.ViewChild('input'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], SearchInputComponent.prototype, "input", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], SearchInputComponent.prototype, "search", void 0);
    SearchInputComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-search-input',
            styleUrls: ['./search-input.component.scss'],
            template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
        })
    ], SearchInputComponent);
    return SearchInputComponent;
}());
exports.SearchInputComponent = SearchInputComponent;
//# sourceMappingURL=search-input.component.js.map