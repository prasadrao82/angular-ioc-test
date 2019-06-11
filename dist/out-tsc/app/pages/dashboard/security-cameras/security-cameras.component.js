"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var security_cameras_1 = require("../../../@core/data/security-cameras");
var operators_1 = require("rxjs/operators");
var SecurityCamerasComponent = /** @class */ (function () {
    function SecurityCamerasComponent(securityCamerasService) {
        var _this = this;
        this.securityCamerasService = securityCamerasService;
        this.alive = true;
        this.isSingleView = false;
        this.securityCamerasService.getCamerasData()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (cameras) {
            _this.cameras = cameras;
            _this.selectedCamera = _this.cameras[0];
        });
    }
    SecurityCamerasComponent.prototype.selectCamera = function (camera) {
        this.selectedCamera = camera;
        this.isSingleView = true;
    };
    SecurityCamerasComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    SecurityCamerasComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-security-cameras',
            styleUrls: ['./security-cameras.component.scss'],
            templateUrl: './security-cameras.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [security_cameras_1.SecurityCamerasData])
    ], SecurityCamerasComponent);
    return SecurityCamerasComponent;
}());
exports.SecurityCamerasComponent = SecurityCamerasComponent;
//# sourceMappingURL=security-cameras.component.js.map