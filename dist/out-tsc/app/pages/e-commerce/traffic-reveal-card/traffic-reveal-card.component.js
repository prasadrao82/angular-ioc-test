"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var traffic_list_1 = require("../../../@core/data/traffic-list");
var traffic_bar_1 = require("../../../@core/data/traffic-bar");
var operators_1 = require("rxjs/operators");
var TrafficRevealCardComponent = /** @class */ (function () {
    function TrafficRevealCardComponent(trafficListService, trafficBarService) {
        this.trafficListService = trafficListService;
        this.trafficBarService = trafficBarService;
        this.alive = true;
        this.revealed = false;
        this.period = 'week';
        this.getTrafficFrontCardData(this.period);
        this.getTrafficBackCardData(this.period);
    }
    TrafficRevealCardComponent.prototype.toggleView = function () {
        this.revealed = !this.revealed;
    };
    TrafficRevealCardComponent.prototype.setPeriodAngGetData = function (value) {
        this.period = value;
        this.getTrafficFrontCardData(value);
        this.getTrafficBackCardData(value);
    };
    TrafficRevealCardComponent.prototype.getTrafficBackCardData = function (period) {
        var _this = this;
        this.trafficBarService.getTrafficBarData(period)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (trafficBarData) {
            _this.trafficBarData = trafficBarData;
        });
    };
    TrafficRevealCardComponent.prototype.getTrafficFrontCardData = function (period) {
        var _this = this;
        this.trafficListService.getTrafficListData(period)
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (trafficListData) {
            _this.trafficListData = trafficListData;
        });
    };
    TrafficRevealCardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    TrafficRevealCardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-traffic-reveal-card',
            styleUrls: ['./traffic-reveal-card.component.scss'],
            templateUrl: './traffic-reveal-card.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [traffic_list_1.TrafficListData,
            traffic_bar_1.TrafficBarData])
    ], TrafficRevealCardComponent);
    return TrafficRevealCardComponent;
}());
exports.TrafficRevealCardComponent = TrafficRevealCardComponent;
//# sourceMappingURL=traffic-reveal-card.component.js.map