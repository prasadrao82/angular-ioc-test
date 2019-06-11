"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var operators_1 = require("rxjs/operators");
var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(location, router) {
        this.location = location;
        this.router = router;
        this.enabled = false;
    }
    AnalyticsService.prototype.trackPageViews = function () {
        var _this = this;
        if (this.enabled) {
            this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
                .subscribe(function () {
                ga('send', { hitType: 'pageview', page: _this.location.path() });
            });
        }
    };
    AnalyticsService.prototype.trackEvent = function (eventName) {
        if (this.enabled) {
            ga('send', 'event', eventName);
        }
    };
    AnalyticsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], AnalyticsService);
    return AnalyticsService;
}());
exports.AnalyticsService = AnalyticsService;
//# sourceMappingURL=analytics.service.js.map