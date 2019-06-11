"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var LayoutDirectionSwitcherComponent = /** @class */ (function () {
    function LayoutDirectionSwitcherComponent(directionService) {
        var _this = this;
        this.directionService = directionService;
        this.directions = theme_1.NbLayoutDirection;
        this.alive = true;
        this.vertical = false;
        this.currentDirection = this.directionService.getDirection();
        this.directionService.onDirectionChange()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (newDirection) { return _this.currentDirection = newDirection; });
    }
    LayoutDirectionSwitcherComponent.prototype.toggleDirection = function (newDirection) {
        this.directionService.setDirection(newDirection);
    };
    LayoutDirectionSwitcherComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LayoutDirectionSwitcherComponent.prototype, "vertical", void 0);
    LayoutDirectionSwitcherComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-layout-direction-switcher',
            template: "\n    <ngx-switcher\n      [firstValue]=\"directions.RTL\"\n      [secondValue]=\"directions.LTR\"\n      [firstValueLabel]=\"'RTL'\"\n      [secondValueLabel]=\"'LTR'\"\n      [value]=\"currentDirection\"\n      (valueChange)=\"toggleDirection($event)\"\n      [vertical]=\"vertical\"\n    >\n    </ngx-switcher>\n  ",
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbLayoutDirectionService])
    ], LayoutDirectionSwitcherComponent);
    return LayoutDirectionSwitcherComponent;
}());
exports.LayoutDirectionSwitcherComponent = LayoutDirectionSwitcherComponent;
//# sourceMappingURL=layout-direction-switcher.component.js.map