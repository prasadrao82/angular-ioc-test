"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var Location_1 = require("../entity/Location");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.positionChanged = new core_1.EventEmitter();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['address'],
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    _this.positionChanged.emit(new Location_1.Location(place.geometry.location.lat(), place.geometry.location.lng()));
                });
            });
        });
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", Object)
    ], SearchComponent.prototype, "positionChanged", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('search'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], SearchComponent.prototype, "searchElementRef", void 0);
    SearchComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-search',
            templateUrl: './search.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.MapsAPILoader,
            core_1.NgZone])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map