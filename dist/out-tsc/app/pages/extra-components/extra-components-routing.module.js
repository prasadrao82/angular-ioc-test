"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var extra_components_component_1 = require("./extra-components.component");
var tree_component_1 = require("./tree/tree.component");
var alert_component_1 = require("./alert/alert.component");
var progress_bar_component_1 = require("./progress-bar/progress-bar.component");
var spinner_component_1 = require("./spinner/spinner.component");
var calendar_component_1 = require("./calendar/calendar.component");
var chat_component_1 = require("./chat/chat.component");
var tabs_component_1 = require("./tabs/tabs.component");
var accordion_component_1 = require("./accordion/accordion.component");
var nebular_form_inputs_component_1 = require("./form-inputs/nebular-form-inputs.component");
var infinite_list_component_1 = require("./infinite-list/infinite-list.component");
var list_component_1 = require("./list/list.component");
var stepper_component_1 = require("./stepper/stepper.component");
var calendar_kit_component_1 = require("./calendar-kit/calendar-kit.component");
var routes = [{
        path: '',
        component: extra_components_component_1.ExtraComponentsComponent,
        children: [
            {
                path: 'calendar',
                component: calendar_component_1.CalendarComponent,
            },
            {
                path: 'stepper',
                component: stepper_component_1.StepperComponent,
            },
            {
                path: 'list',
                component: list_component_1.ListComponent,
            },
            {
                path: 'infinite-list',
                component: infinite_list_component_1.InfiniteListComponent,
            },
            {
                path: 'form-inputs',
                component: nebular_form_inputs_component_1.NebularFormInputsComponent,
            },
            {
                path: 'accordion',
                component: accordion_component_1.AccordionComponent,
            },
            {
                path: 'progress-bar',
                component: progress_bar_component_1.ProgressBarComponent,
            },
            {
                path: 'spinner',
                component: spinner_component_1.SpinnerComponent,
            },
            {
                path: 'alert',
                component: alert_component_1.AlertComponent,
            },
            {
                path: 'tree',
                component: tree_component_1.TreeComponent,
            },
            {
                path: 'tabs',
                component: tabs_component_1.TabsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'tab1',
                        pathMatch: 'full',
                    },
                    {
                        path: 'tab1',
                        component: tabs_component_1.Tab1Component,
                    },
                    {
                        path: 'tab2',
                        component: tabs_component_1.Tab2Component,
                    },
                ],
            },
            {
                path: 'calendar-kit',
                component: calendar_kit_component_1.CalendarKitFullCalendarShowcaseComponent,
            },
            {
                path: 'chat',
                component: chat_component_1.ChatComponent,
            },
        ],
    }];
var ExtraComponentsRoutingModule = /** @class */ (function () {
    function ExtraComponentsRoutingModule() {
    }
    ExtraComponentsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], ExtraComponentsRoutingModule);
    return ExtraComponentsRoutingModule;
}());
exports.ExtraComponentsRoutingModule = ExtraComponentsRoutingModule;
//# sourceMappingURL=extra-components-routing.module.js.map