"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var TOTAL_PAGES = 7;
var NewsPost = /** @class */ (function () {
    function NewsPost() {
    }
    return NewsPost;
}());
exports.NewsPost = NewsPost;
var NewsService = /** @class */ (function () {
    function NewsService(http) {
        this.http = http;
    }
    NewsService.prototype.load = function (page, pageSize) {
        var startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;
        return this.http
            .get('assets/data/news.json')
            .pipe(operators_1.map(function (news) { return news.splice(startIndex, pageSize); }), operators_1.delay(1500));
    };
    NewsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
//# sourceMappingURL=news.service.js.map