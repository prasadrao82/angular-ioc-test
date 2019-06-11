"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var news_service_1 = require("../../services/news.service");
var NewsPostComponent = /** @class */ (function () {
    function NewsPostComponent() {
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", news_service_1.NewsPost)
    ], NewsPostComponent.prototype, "post", void 0);
    NewsPostComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-news-post',
            templateUrl: 'news-post.component.html',
        })
    ], NewsPostComponent);
    return NewsPostComponent;
}());
exports.NewsPostComponent = NewsPostComponent;
//# sourceMappingURL=news-post.component.js.map