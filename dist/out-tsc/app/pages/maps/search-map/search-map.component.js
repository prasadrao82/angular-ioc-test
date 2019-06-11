"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Location_1 = require("./entity/Location");
var SearchMapComponent = /** @class */ (function () {
    function SearchMapComponent() {
        this.searchedLocation = new Location_1.Location();
    }
    SearchMapComponent.prototype.updateLocation = function (event) {
        this.searchedLocation = new Location_1.Location(event.latitude, event.longitude);
    };
    SearchMapComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-search-map',
            templateUrl: './search-map.component.html',
        })
    ], SearchMapComponent);
    return SearchMapComponent;
}());
exports.SearchMapComponent = SearchMapComponent;
//# sourceMappingURL=search-map.component.js.map