"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var GmapsComponent = /** @class */ (function () {
    function GmapsComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GmapsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-gmaps',
            styleUrls: ['./gmaps.component.scss'],
            template: "\n    <nb-card>\n      <nb-card-header>Google Maps</nb-card-header>\n      <nb-card-body>\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n      </nb-card-body>\n    </nb-card>\n  ",
        })
    ], GmapsComponent);
    return GmapsComponent;
}());
exports.GmapsComponent = GmapsComponent;
//# sourceMappingURL=gmaps.component.js.map