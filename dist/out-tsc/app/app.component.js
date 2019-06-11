"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var core_1 = require("@angular/core");
var analytics_service_1 = require("./@core/utils/analytics.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(analytics) {
        this.analytics = analytics;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.analytics.trackPageViews();
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-app',
            template: '<router-outlet></router-outlet>',
        }),
        tslib_1.__metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map