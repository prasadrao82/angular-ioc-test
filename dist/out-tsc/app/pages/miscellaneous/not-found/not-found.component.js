"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var theme_1 = require("@nebular/theme");
var core_1 = require("@angular/core");
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(menuService) {
        this.menuService = menuService;
    }
    NotFoundComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    NotFoundComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-not-found',
            styleUrls: ['./not-found.component.scss'],
            templateUrl: './not-found.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbMenuService])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=not-found.component.js.map