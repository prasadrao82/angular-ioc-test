"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var pages_menu_1 = require("./pages-menu");
var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
        this.menu = pages_menu_1.MENU_ITEMS;
    }
    PagesComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-pages',
            styleUrls: ['pages.component.scss'],
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
        })
    ], PagesComponent);
    return PagesComponent;
}());
exports.PagesComponent = PagesComponent;
//# sourceMappingURL=pages.component.js.map