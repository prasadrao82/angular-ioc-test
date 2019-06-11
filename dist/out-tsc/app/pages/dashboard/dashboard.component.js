"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var operators_1 = require("rxjs/operators");
var solar_1 = require("../../@core/data/solar");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(themeService, solarService) {
        var _this = this;
        this.themeService = themeService;
        this.solarService = solarService;
        this.alive = true;
        this.lightCard = {
            title: 'Plano Light',
            iconClass: 'nb-lightbulb',
            type: 'primary',
        };
        this.rollerShadesCard = {
            title: 'Roller Shades',
            iconClass: 'nb-roller-shades',
            type: 'success',
        };
        this.wirelessAudioCard = {
            title: 'Wireless Audio',
            iconClass: 'nb-audio',
            type: 'info',
        };
        this.coffeeMakerCard = {
            title: 'Coffee Maker',
            iconClass: 'nb-coffee-maker',
            type: 'warning',
        };
        this.commonStatusCardsSet = [
            this.lightCard,
            this.rollerShadesCard,
            this.wirelessAudioCard,
            this.coffeeMakerCard,
        ];
        this.statusCardsByThemes = {
            default: this.commonStatusCardsSet,
            cosmic: this.commonStatusCardsSet,
            corporate: [
                tslib_1.__assign({}, this.lightCard, { type: 'warning' }),
                tslib_1.__assign({}, this.rollerShadesCard, { type: 'primary' }),
                tslib_1.__assign({}, this.wirelessAudioCard, { type: 'danger' }),
                tslib_1.__assign({}, this.coffeeMakerCard, { type: 'secondary' }),
            ],
        };
        this.themeService.getJsTheme()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.statusCards = _this.statusCardsByThemes[theme.name];
        });
        this.solarService.getSolarData()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (data) {
            _this.solarValue = data;
        });
    }
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    DashboardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-dashboard',
            styleUrls: ['./dashboard.component.scss'],
            templateUrl: './dashboard.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService,
            solar_1.SolarData])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map