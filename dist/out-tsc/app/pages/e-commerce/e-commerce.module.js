"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_echarts_1 = require("ngx-echarts");
var ngx_charts_1 = require("@swimlane/ngx-charts");
var theme_module_1 = require("../../@theme/theme.module");
var e_commerce_component_1 = require("./e-commerce.component");
var profit_card_component_1 = require("./profit-card/profit-card.component");
var charts_panel_component_1 = require("./charts-panel/charts-panel.component");
var orders_chart_component_1 = require("./charts-panel/charts/orders-chart.component");
var profit_chart_component_1 = require("./charts-panel/charts/profit-chart.component");
var chart_panel_header_component_1 = require("./charts-panel/chart-panel-header/chart-panel-header.component");
var chart_panel_summary_component_1 = require("./charts-panel/chart-panel-summary/chart-panel-summary.component");
var angular2_chartjs_1 = require("angular2-chartjs");
var stats_card_back_component_1 = require("./profit-card/back-side/stats-card-back.component");
var stats_area_chart_component_1 = require("./profit-card/back-side/stats-area-chart.component");
var stats_bar_animation_chart_component_1 = require("./profit-card/front-side/stats-bar-animation-chart.component");
var stats_card_front_component_1 = require("./profit-card/front-side/stats-card-front.component");
var traffic_reveal_card_component_1 = require("./traffic-reveal-card/traffic-reveal-card.component");
var traffic_bar_component_1 = require("./traffic-reveal-card/front-side/traffic-bar/traffic-bar.component");
var traffic_front_card_component_1 = require("./traffic-reveal-card/front-side/traffic-front-card.component");
var traffic_cards_header_component_1 = require("./traffic-reveal-card/traffic-cards-header/traffic-cards-header.component");
var traffic_back_card_component_1 = require("./traffic-reveal-card/back-side/traffic-back-card.component");
var traffic_bar_chart_component_1 = require("./traffic-reveal-card/back-side/traffic-bar-chart.component");
var visitors_analytics_component_1 = require("./visitors-analytics/visitors-analytics.component");
var visitors_analytics_chart_component_1 = require("./visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component");
var visitors_statistics_component_1 = require("./visitors-analytics/visitors-statistics/visitors-statistics.component");
var legend_chart_component_1 = require("./legend-chart/legend-chart.component");
var user_activity_component_1 = require("./user-activity/user-activity.component");
var progress_section_component_1 = require("./progress-section/progress-section.component");
var slide_out_component_1 = require("./slide-out/slide-out.component");
var country_orders_component_1 = require("./country-orders/country-orders.component");
var country_orders_map_component_1 = require("./country-orders/map/country-orders-map.component");
var country_orders_map_service_1 = require("./country-orders/map/country-orders-map.service");
var ngx_leaflet_1 = require("@asymmetrik/ngx-leaflet");
var country_orders_chart_component_1 = require("./country-orders/chart/country-orders-chart.component");
var earning_card_component_1 = require("./earning-card/earning-card.component");
var earning_card_back_component_1 = require("./earning-card/back-side/earning-card-back.component");
var earning_pie_chart_component_1 = require("./earning-card/back-side/earning-pie-chart.component");
var earning_card_front_component_1 = require("./earning-card/front-side/earning-card-front.component");
var earning_live_update_chart_component_1 = require("./earning-card/front-side/earning-live-update-chart.component");
var ECommerceModule = /** @class */ (function () {
    function ECommerceModule() {
    }
    ECommerceModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                theme_module_1.ThemeModule,
                angular2_chartjs_1.ChartModule,
                ngx_echarts_1.NgxEchartsModule,
                ngx_charts_1.NgxChartsModule,
                ngx_leaflet_1.LeafletModule,
            ],
            declarations: [
                e_commerce_component_1.ECommerceComponent,
                stats_card_front_component_1.StatsCardFrontComponent,
                stats_area_chart_component_1.StatsAreaChartComponent,
                stats_bar_animation_chart_component_1.StatsBarAnimationChartComponent,
                profit_card_component_1.ProfitCardComponent,
                charts_panel_component_1.ECommerceChartsPanelComponent,
                chart_panel_header_component_1.ChartPanelHeaderComponent,
                chart_panel_summary_component_1.ChartPanelSummaryComponent,
                orders_chart_component_1.OrdersChartComponent,
                profit_chart_component_1.ProfitChartComponent,
                stats_card_back_component_1.StatsCardBackComponent,
                traffic_reveal_card_component_1.TrafficRevealCardComponent,
                traffic_bar_chart_component_1.TrafficBarChartComponent,
                traffic_front_card_component_1.TrafficFrontCardComponent,
                traffic_back_card_component_1.TrafficBackCardComponent,
                traffic_bar_component_1.TrafficBarComponent,
                traffic_cards_header_component_1.TrafficCardsHeaderComponent,
                country_orders_component_1.CountryOrdersComponent,
                country_orders_map_component_1.CountryOrdersMapComponent,
                country_orders_chart_component_1.CountryOrdersChartComponent,
                visitors_analytics_component_1.ECommerceVisitorsAnalyticsComponent,
                visitors_analytics_chart_component_1.ECommerceVisitorsAnalyticsChartComponent,
                visitors_statistics_component_1.ECommerceVisitorsStatisticsComponent,
                legend_chart_component_1.ECommerceLegendChartComponent,
                user_activity_component_1.ECommerceUserActivityComponent,
                progress_section_component_1.ECommerceProgressSectionComponent,
                slide_out_component_1.SlideOutComponent,
                earning_card_component_1.EarningCardComponent,
                earning_card_front_component_1.EarningCardFrontComponent,
                earning_card_back_component_1.EarningCardBackComponent,
                earning_pie_chart_component_1.EarningPieChartComponent,
                earning_live_update_chart_component_1.EarningLiveUpdateChartComponent,
            ],
            providers: [
                country_orders_map_service_1.CountryOrdersMapService,
            ],
        })
    ], ECommerceModule);
    return ECommerceModule;
}());
exports.ECommerceModule = ECommerceModule;
//# sourceMappingURL=e-commerce.module.js.map