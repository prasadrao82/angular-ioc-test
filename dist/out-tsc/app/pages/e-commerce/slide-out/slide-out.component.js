"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var SlideOutComponent = /** @class */ (function () {
    function SlideOutComponent() {
        this.showVisitorsStatistics = false;
    }
    SlideOutComponent.prototype.toggleStatistics = function () {
        this.showVisitorsStatistics = !this.showVisitorsStatistics;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SlideOutComponent.prototype, "showVisitorsStatistics", void 0);
    SlideOutComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-slide-out',
            styleUrls: ['./slide-out.component.scss'],
            templateUrl: './slide-out.component.html',
        })
    ], SlideOutComponent);
    return SlideOutComponent;
}());
exports.SlideOutComponent = SlideOutComponent;
//# sourceMappingURL=slide-out.component.js.map