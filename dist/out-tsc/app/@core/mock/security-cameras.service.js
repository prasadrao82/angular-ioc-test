"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var security_cameras_1 = require("../data/security-cameras");
var SecurityCamerasService = /** @class */ (function (_super) {
    tslib_1.__extends(SecurityCamerasService, _super);
    function SecurityCamerasService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cameras = [
            {
                title: 'Camera #1',
                source: 'assets/images/camera1.jpg',
            },
            {
                title: 'Camera #2',
                source: 'assets/images/camera2.jpg',
            },
            {
                title: 'Camera #3',
                source: 'assets/images/camera3.jpg',
            },
            {
                title: 'Camera #4',
                source: 'assets/images/camera4.jpg',
            },
        ];
        return _this;
    }
    SecurityCamerasService.prototype.getCamerasData = function () {
        return rxjs_1.of(this.cameras);
    };
    SecurityCamerasService = tslib_1.__decorate([
        core_1.Injectable()
    ], SecurityCamerasService);
    return SecurityCamerasService;
}(security_cameras_1.SecurityCamerasData));
exports.SecurityCamerasService = SecurityCamerasService;
//# sourceMappingURL=security-cameras.service.js.map