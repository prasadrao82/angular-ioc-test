"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var users_1 = require("../../../@core/data/users");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(userService, themeService, breakpointService) {
        var _this = this;
        this.userService = userService;
        this.themeService = themeService;
        this.breakpointService = breakpointService;
        this.alive = true;
        this.breakpoints = this.breakpointService.getBreakpointsMap();
        this.themeService.onMediaQueryChange()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var oldValue = _a[0], newValue = _a[1];
            _this.breakpoint = newValue;
        });
        rxjs_1.forkJoin(this.userService.getContacts(), this.userService.getRecentUsers())
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (_a) {
            var contacts = _a[0], recent = _a[1];
            _this.contacts = contacts;
            _this.recent = recent;
        });
    }
    ContactsComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    ContactsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-contacts',
            styleUrls: ['./contacts.component.scss'],
            templateUrl: './contacts.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [users_1.UserData,
            theme_1.NbThemeService,
            theme_1.NbMediaBreakpointsService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map