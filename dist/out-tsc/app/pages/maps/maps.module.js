"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var ngx_leaflet_1 = require("@asymmetrik/ngx-leaflet");
var ngx_echarts_1 = require("ngx-echarts");
var theme_module_1 = require("../../@theme/theme.module");
var maps_routing_module_1 = require("./maps-routing.module");
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCpVhQiwAllg1RAFaxMWSpQruuGARy0Y1k',
                    libraries: ['places'],
                }),
                ngx_leaflet_1.LeafletModule.forRoot(),
                maps_routing_module_1.MapsRoutingModule,
                ngx_echarts_1.NgxEchartsModule,
            ],
            exports: [],
            declarations: maps_routing_module_1.routedComponents.slice(),
        })
    ], MapsModule);
    return MapsModule;
}());
exports.MapsModule = MapsModule;
//# sourceMappingURL=maps.module.js.map