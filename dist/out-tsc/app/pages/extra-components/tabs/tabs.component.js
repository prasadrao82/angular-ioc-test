"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Tab1Component = /** @class */ (function () {
    function Tab1Component() {
    }
    Tab1Component = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-tab1',
            template: "\n    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered\n      <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Home_appliances\">home appliances</a>\n      became viable in the 1900s with the introduction of\n      <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Electric_power_distribution\">electric power distribution\n      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,\n      dishwashers, and clothes dryers.\n    </p>\n  ",
        })
    ], Tab1Component);
    return Tab1Component;
}());
exports.Tab1Component = Tab1Component;
var Tab2Component = /** @class */ (function () {
    function Tab2Component() {
    }
    Tab2Component = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-tab2',
            template: "\n    <p>Tab 2 works!</p>\n  ",
        })
    ], Tab2Component);
    return Tab2Component;
}());
exports.Tab2Component = Tab2Component;
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [
            {
                title: 'Route tab #1',
                route: '/pages/extra-components/tabs/tab1',
            },
            {
                title: 'Route tab #2',
                route: '/pages/extra-components/tabs/tab2',
            },
        ];
    }
    TabsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-tabs',
            styleUrls: ['./tabs.component.scss'],
            templateUrl: './tabs.component.html',
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map