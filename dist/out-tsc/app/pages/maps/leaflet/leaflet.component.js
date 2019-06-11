"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var L = require("leaflet");
require("style-loader!leaflet/dist/leaflet.css");
var LeafletComponent = /** @class */ (function () {
    function LeafletComponent() {
        this.options = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
            ],
            zoom: 5,
            center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
        };
    }
    LeafletComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-leaflet',
            styleUrls: ['./leaflet.component.scss'],
            template: "\n    <nb-card>\n      <nb-card-header>Leaflet Maps</nb-card-header>\n      <nb-card-body>\n        <div leaflet [leafletOptions]=\"options\"></div>\n      </nb-card-body>\n    </nb-card>\n  ",
        })
    ], LeafletComponent);
    return LeafletComponent;
}());
exports.LeafletComponent = LeafletComponent;
//# sourceMappingURL=leaflet.component.js.map