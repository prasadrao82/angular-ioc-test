"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var solar_1 = require("../data/solar");
var SolarService = /** @class */ (function (_super) {
    tslib_1.__extends(SolarService, _super);
    function SolarService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = 42;
        return _this;
    }
    SolarService.prototype.getSolarData = function () {
        return rxjs_1.of(this.value);
    };
    SolarService = tslib_1.__decorate([
        core_1.Injectable()
    ], SolarService);
    return SolarService;
}(solar_1.SolarData));
exports.SolarService = SolarService;
//# sourceMappingURL=solar.service.js.map