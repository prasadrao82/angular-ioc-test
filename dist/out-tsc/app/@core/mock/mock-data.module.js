"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var users_service_1 = require("./users.service");
var electricity_service_1 = require("./electricity.service");
var smart_table_service_1 = require("./smart-table.service");
var user_activity_service_1 = require("./user-activity.service");
var orders_chart_service_1 = require("./orders-chart.service");
var profit_chart_service_1 = require("./profit-chart.service");
var traffic_list_service_1 = require("./traffic-list.service");
var periods_service_1 = require("./periods.service");
var earning_service_1 = require("./earning.service");
var orders_profit_chart_service_1 = require("./orders-profit-chart.service");
var traffic_bar_service_1 = require("./traffic-bar.service");
var profit_bar_animation_chart_service_1 = require("./profit-bar-animation-chart.service");
var temperature_humidity_service_1 = require("./temperature-humidity.service");
var solar_service_1 = require("./solar.service");
var traffic_chart_service_1 = require("./traffic-chart.service");
var stats_bar_service_1 = require("./stats-bar.service");
var country_order_service_1 = require("./country-order.service");
var stats_progress_bar_service_1 = require("./stats-progress-bar.service");
var visitors_analytics_service_1 = require("./visitors-analytics.service");
var security_cameras_service_1 = require("./security-cameras.service");
var SERVICES = [
    users_service_1.UserService,
    electricity_service_1.ElectricityService,
    smart_table_service_1.SmartTableService,
    user_activity_service_1.UserActivityService,
    orders_chart_service_1.OrdersChartService,
    profit_chart_service_1.ProfitChartService,
    traffic_list_service_1.TrafficListService,
    periods_service_1.PeriodsService,
    earning_service_1.EarningService,
    orders_profit_chart_service_1.OrdersProfitChartService,
    traffic_bar_service_1.TrafficBarService,
    profit_bar_animation_chart_service_1.ProfitBarAnimationChartService,
    temperature_humidity_service_1.TemperatureHumidityService,
    solar_service_1.SolarService,
    traffic_chart_service_1.TrafficChartService,
    stats_bar_service_1.StatsBarService,
    country_order_service_1.CountryOrderService,
    stats_progress_bar_service_1.StatsProgressBarService,
    visitors_analytics_service_1.VisitorsAnalyticsService,
    security_cameras_service_1.SecurityCamerasService,
];
var MockDataModule = /** @class */ (function () {
    function MockDataModule() {
    }
    MockDataModule_1 = MockDataModule;
    MockDataModule.forRoot = function () {
        return {
            ngModule: MockDataModule_1,
            providers: SERVICES.slice(),
        };
    };
    var MockDataModule_1;
    MockDataModule = MockDataModule_1 = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            providers: SERVICES.slice(),
        })
    ], MockDataModule);
    return MockDataModule;
}());
exports.MockDataModule = MockDataModule;
//# sourceMappingURL=mock-data.module.js.map