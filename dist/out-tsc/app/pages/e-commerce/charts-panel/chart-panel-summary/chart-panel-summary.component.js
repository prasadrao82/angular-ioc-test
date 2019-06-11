"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ChartPanelSummaryComponent = /** @class */ (function () {
    function ChartPanelSummaryComponent() {
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Array)
    ], ChartPanelSummaryComponent.prototype, "summary", void 0);
    ChartPanelSummaryComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-chart-panel-summary',
            styleUrls: ['./chart-panel-summary.component.scss'],
            template: "\n    <div class=\"summary-container\">\n      <div class=\"summory\" *ngFor=\"let item of summary\">\n        <div class=\"title\">{{ item.title }}</div>\n        <div class=\"value\">{{ item.value }}</div>\n      </div>\n    </div>\n  ",
        })
    ], ChartPanelSummaryComponent);
    return ChartPanelSummaryComponent;
}());
exports.ChartPanelSummaryComponent = ChartPanelSummaryComponent;
//# sourceMappingURL=chart-panel-summary.component.js.map