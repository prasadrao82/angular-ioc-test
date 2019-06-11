"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var L = require("leaflet");
var country_orders_map_service_1 = require("./country-orders-map.service");
var theme_1 = require("@nebular/theme");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var CountryOrdersMapComponent = /** @class */ (function () {
    function CountryOrdersMapComponent(ecMapService, theme) {
        var _this = this;
        this.ecMapService = ecMapService;
        this.theme = theme;
        this.select = new core_1.EventEmitter();
        this.layers = [];
        this.alive = true;
        this.options = {
            zoom: 2,
            minZoom: 2,
            maxZoom: 6,
            zoomControl: false,
            center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
            maxBounds: new L.LatLngBounds(new L.LatLng(-89.98155760646617, -180), new L.LatLng(89.99346179538875, 180)),
            maxBoundsViscosity: 1.0,
        };
        rxjs_1.combineLatest([
            this.ecMapService.getCords(),
            this.theme.getJsTheme(),
        ])
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var cords = _a[0], config = _a[1];
            _this.currentTheme = config.variables.countryOrders;
            _this.layers = [_this.createGeoJsonLayer(cords)];
            _this.selectFeature(_this.findFeatureLayerByCountryId(_this.countryId));
        });
    }
    CountryOrdersMapComponent.prototype.mapReady = function (map) {
        map.addControl(L.control.zoom({ position: 'bottomright' }));
        // fix the map fully displaying, existing leaflet bag
        setTimeout(function () {
            map.invalidateSize();
        }, 0);
    };
    CountryOrdersMapComponent.prototype.createGeoJsonLayer = function (cords) {
        var _this = this;
        return L.geoJSON(cords, {
            style: function () { return ({
                weight: _this.currentTheme.countryBorderWidth,
                fillColor: _this.currentTheme.countryFillColor,
                fillOpacity: 1,
                color: _this.currentTheme.countryBorderColor,
                opacity: 1,
            }); },
            onEachFeature: function (f, l) {
                _this.onEachFeature(f, l);
            },
        });
    };
    CountryOrdersMapComponent.prototype.onEachFeature = function (feature, layer) {
        var _this = this;
        layer.on({
            mouseover: function (e) { return _this.highlightFeature(e.target); },
            mouseout: function (e) { return _this.moveout(e.target); },
            click: function (e) { return _this.selectFeature(e.target); },
        });
    };
    CountryOrdersMapComponent.prototype.highlightFeature = function (featureLayer) {
        if (featureLayer) {
            featureLayer.setStyle({
                weight: this.currentTheme.hoveredCountryBorderWidth,
                fillColor: this.currentTheme.hoveredCountryFillColor,
                color: this.currentTheme.hoveredCountryBorderColor,
            });
            if (!L.Browser.ie && !L.Browser.opera12 && !L.Browser.edge) {
                featureLayer.bringToFront();
            }
        }
    };
    CountryOrdersMapComponent.prototype.moveout = function (featureLayer) {
        if (featureLayer !== this.selectedCountry) {
            this.resetHighlight(featureLayer);
            // When countries have common border we should highlight selected country once again
            this.highlightFeature(this.selectedCountry);
        }
    };
    CountryOrdersMapComponent.prototype.resetHighlight = function (featureLayer) {
        if (featureLayer) {
            var geoJsonLayer = this.layers[0];
            geoJsonLayer.resetStyle(featureLayer);
        }
    };
    CountryOrdersMapComponent.prototype.selectFeature = function (featureLayer) {
        if (featureLayer !== this.selectedCountry) {
            this.resetHighlight(this.selectedCountry);
            this.highlightFeature(featureLayer);
            this.selectedCountry = featureLayer;
            this.select.emit(featureLayer.feature.properties.name);
        }
    };
    CountryOrdersMapComponent.prototype.findFeatureLayerByCountryId = function (id) {
        var layers = this.layers[0].getLayers();
        var featureLayer = layers.find(function (item) {
            return item.feature.id === id;
        });
        return featureLayer ? featureLayer : null;
    };
    CountryOrdersMapComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CountryOrdersMapComponent.prototype, "countryId", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], CountryOrdersMapComponent.prototype, "select", void 0);
    CountryOrdersMapComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-country-orders-map',
            styleUrls: ['./country-orders-map.component.scss'],
            template: "\n    <div leaflet [leafletOptions]=\"options\" [leafletLayers]=\"layers\" (leafletMapReady)=\"mapReady($event)\"></div>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [country_orders_map_service_1.CountryOrdersMapService,
            theme_1.NbThemeService])
    ], CountryOrdersMapComponent);
    return CountryOrdersMapComponent;
}());
exports.CountryOrdersMapComponent = CountryOrdersMapComponent;
//# sourceMappingURL=country-orders-map.component.js.map