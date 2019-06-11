"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Location_1 = require("../entity/Location");
var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    Object.defineProperty(MapComponent.prototype, "searchedLocation", {
        set: function (searchedLocation) {
            this.latitude = searchedLocation.latitude;
            this.longitude = searchedLocation.longitude;
            this.zoom = 12;
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set up current location
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.searchedLocation = new Location_1.Location(position.coords.latitude, position.coords.longitude);
            });
        }
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Location_1.Location),
        tslib_1.__metadata("design:paramtypes", [Location_1.Location])
    ], MapComponent.prototype, "searchedLocation", null);
    MapComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.scss'],
        })
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map