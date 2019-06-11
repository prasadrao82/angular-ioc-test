"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var angular_tree_component_1 = require("angular-tree-component");
var angular2_toaster_1 = require("angular2-toaster");
var theme_module_1 = require("../../@theme/theme.module");
var extra_components_routing_module_1 = require("./extra-components-routing.module");
// components
var extra_components_component_1 = require("./extra-components.component");
var tree_component_1 = require("./tree/tree.component");
var spinner_in_tabs_component_1 = require("./spinner/spinner-in-tabs/spinner-in-tabs.component");
var spinner_in_buttons_component_1 = require("./spinner/spinner-in-buttons/spinner-in-buttons.component");
var spinner_sizes_component_1 = require("./spinner/spinner-sizes/spinner-sizes.component");
var spinner_color_component_1 = require("./spinner/spinner-color/spinner-color.component");
var spinner_component_1 = require("./spinner/spinner.component");
var interactive_progress_bar_component_1 = require("./progress-bar/interactive-progress-bar/interactive-progress-bar.component");
var progress_bar_component_1 = require("./progress-bar/progress-bar.component");
var alert_component_1 = require("./alert/alert.component");
var chat_component_1 = require("./chat/chat.component");
var tabs_component_1 = require("./tabs/tabs.component");
var calendar_component_1 = require("./calendar/calendar.component");
var day_cell_component_1 = require("./calendar/day-cell/day-cell.component");
var stepper_component_1 = require("./stepper/stepper.component");
var list_component_1 = require("./list/list.component");
var infinite_list_component_1 = require("./infinite-list/infinite-list.component");
var news_post_component_1 = require("./infinite-list/news-post/news-post.component");
var news_post_placeholder_component_1 = require("./infinite-list/news-post-placeholder/news-post-placeholder.component");
var accordion_component_1 = require("./accordion/accordion.component");
var nebular_form_inputs_component_1 = require("./form-inputs/nebular-form-inputs.component");
var nebular_select_component_1 = require("./form-inputs/nebular-select/nebular-select.component");
var calendar_kit_component_1 = require("./calendar-kit/calendar-kit.component");
var month_cell_component_1 = require("./calendar-kit/month-cell/month-cell.component");
// service
var news_service_1 = require("./services/news.service");
var COMPONENTS = [
    extra_components_component_1.ExtraComponentsComponent,
    tree_component_1.TreeComponent,
    alert_component_1.AlertComponent,
    progress_bar_component_1.ProgressBarComponent,
    interactive_progress_bar_component_1.InteractiveProgressBarComponent,
    spinner_component_1.SpinnerComponent,
    spinner_color_component_1.SpinnerColorComponent,
    spinner_sizes_component_1.SpinnerSizesComponent,
    spinner_in_buttons_component_1.SpinnerInButtonsComponent,
    spinner_in_tabs_component_1.SpinnerInTabsComponent,
    calendar_component_1.CalendarComponent,
    day_cell_component_1.DayCellComponent,
    chat_component_1.ChatComponent,
    tabs_component_1.TabsComponent,
    tabs_component_1.Tab1Component,
    tabs_component_1.Tab2Component,
    stepper_component_1.StepperComponent,
    list_component_1.ListComponent,
    infinite_list_component_1.InfiniteListComponent,
    news_post_component_1.NewsPostComponent,
    news_post_placeholder_component_1.NewsPostPlaceholderComponent,
    accordion_component_1.AccordionComponent,
    nebular_form_inputs_component_1.NebularFormInputsComponent,
    nebular_select_component_1.NebularSelectComponent,
    calendar_kit_component_1.CalendarKitFullCalendarShowcaseComponent,
    month_cell_component_1.CalendarKitMonthCellComponent,
];
var SERVICES = [
    news_service_1.NewsService,
];
var MODULES = [
    theme_module_1.ThemeModule,
    extra_components_routing_module_1.ExtraComponentsRoutingModule,
    angular_tree_component_1.TreeModule,
    angular2_toaster_1.ToasterModule.forRoot(),
];
var ExtraComponentsModule = /** @class */ (function () {
    function ExtraComponentsModule() {
    }
    ExtraComponentsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: MODULES.slice(),
            declarations: COMPONENTS.slice(),
            providers: SERVICES.slice(),
        })
    ], ExtraComponentsModule);
    return ExtraComponentsModule;
}());
exports.ExtraComponentsModule = ExtraComponentsModule;
//# sourceMappingURL=extra-components.module.js.map