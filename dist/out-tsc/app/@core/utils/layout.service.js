"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.layoutSize$ = new rxjs_1.Subject();
    }
    LayoutService.prototype.changeLayoutSize = function () {
        this.layoutSize$.next();
    };
    LayoutService.prototype.onChangeLayoutSize = function () {
        return this.layoutSize$.pipe(operators_1.share(), operators_1.delay(1));
    };
    LayoutService = tslib_1.__decorate([
        core_1.Injectable()
    ], LayoutService);
    return LayoutService;
}());
exports.LayoutService = LayoutService;
//# sourceMappingURL=layout.service.js.map