"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var NewsPostPlaceholderComponent = /** @class */ (function () {
    function NewsPostPlaceholderComponent() {
        this.label = 'Loading';
    }
    tslib_1.__decorate([
        core_1.HostBinding('attr.aria-label'),
        tslib_1.__metadata("design:type", Object)
    ], NewsPostPlaceholderComponent.prototype, "label", void 0);
    NewsPostPlaceholderComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-news-post-placeholder',
            templateUrl: 'news-post-placeholder.component.html',
            styleUrls: ['news-post-placeholder.component.scss'],
        })
    ], NewsPostPlaceholderComponent);
    return NewsPostPlaceholderComponent;
}());
exports.NewsPostPlaceholderComponent = NewsPostPlaceholderComponent;
//# sourceMappingURL=news-post-placeholder.component.js.map