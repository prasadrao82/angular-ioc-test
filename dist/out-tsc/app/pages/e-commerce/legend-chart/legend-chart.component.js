"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ECommerceLegendChartComponent = /** @class */ (function () {
    function ECommerceLegendChartComponent() {
        /**
         * Take an array of legend items
         * Available iconColor: 'green', 'purple', 'light-purple', 'blue', 'yellow'
         * @type {{iconColor: string; title: string}[]}
         */
        this.legendItems = [];
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ECommerceLegendChartComponent.prototype, "legendItems", void 0);
    ECommerceLegendChartComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-legend-chart',
            styleUrls: ['./legend-chart.component.scss'],
            templateUrl: './legend-chart.component.html',
        })
    ], ECommerceLegendChartComponent);
    return ECommerceLegendChartComponent;
}());
exports.ECommerceLegendChartComponent = ECommerceLegendChartComponent;
//# sourceMappingURL=legend-chart.component.js.map