"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var news_service_1 = require("../services/news.service");
var InfiniteListComponent = /** @class */ (function () {
    function InfiniteListComponent(newsService) {
        this.newsService = newsService;
        this.firstCard = {
            news: [],
            placeholders: [],
            loading: false,
            pageToLoadNext: 1,
        };
        this.secondCard = {
            news: [],
            placeholders: [],
            loading: false,
            pageToLoadNext: 1,
        };
        this.pageSize = 10;
    }
    InfiniteListComponent.prototype.loadNext = function (cardData) {
        if (cardData.loading) {
            return;
        }
        cardData.loading = true;
        cardData.placeholders = new Array(this.pageSize);
        this.newsService.load(cardData.pageToLoadNext, this.pageSize)
            .subscribe(function (nextNews) {
            var _a;
            cardData.placeholders = [];
            (_a = cardData.news).push.apply(_a, nextNews);
            cardData.loading = false;
            cardData.pageToLoadNext++;
        });
    };
    InfiniteListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-infinite-list',
            templateUrl: 'infinite-list.component.html',
            styleUrls: ['infinite-list.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [news_service_1.NewsService])
    ], InfiniteListComponent);
    return InfiniteListComponent;
}());
exports.InfiniteListComponent = InfiniteListComponent;
//# sourceMappingURL=infinite-list.component.js.map