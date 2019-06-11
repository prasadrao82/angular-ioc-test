"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var theme_1 = require("@nebular/theme");
var HeroButtonComponent = /** @class */ (function () {
    function HeroButtonComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.themeName = 'default';
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.themeName = theme.name;
            _this.init(theme.variables);
        });
    }
    HeroButtonComponent.prototype.init = function (colors) {
        this.settings = [
            {
                status: 'primary',
                container: 'primary-container',
                title: 'Primary Button',
                buttonTitle: 'Primary',
                default: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                },
                corporate: {
                    color: colors.primary,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (115, 161, 255, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.primary + ", 20deg)",
                    gradientRight: colors.primary,
                    bevel: "shade(" + colors.primary + ", 14%)",
                    shadow: 'rgba (6, 7, 64, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.primary + ", 10deg)",
                    },
                },
            },
            {
                status: 'warning',
                container: 'warning-container',
                title: 'Warning Button',
                buttonTitle: 'Warning',
                default: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                },
                corporate: {
                    color: colors.warning,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (256, 163, 107, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.warning + ", 10deg)",
                    gradientRight: colors.warning,
                    bevel: "shade(" + colors.warning + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.warning + ", 5deg)",
                    },
                },
            },
            {
                status: 'success',
                container: 'success-container',
                title: 'Success Button',
                buttonTitle: 'Success',
                default: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                },
                corporate: {
                    color: colors.success,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (93, 207, 227, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.success + ", 20deg)",
                    gradientRight: colors.success,
                    bevel: "shade(" + colors.success + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.success + ", 10deg)",
                    },
                },
            },
            {
                status: 'info',
                container: 'info-container',
                title: 'Info Button',
                buttonTitle: 'Info',
                default: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                },
                corporate: {
                    color: colors.info,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (186, 127, 236, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.info + ", -10deg)",
                    gradientRight: colors.info,
                    bevel: "shade(" + colors.info + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.info + ", -5deg)",
                    },
                },
            },
            {
                status: 'danger',
                container: 'danger-container',
                title: 'Danger Button',
                buttonTitle: 'Danger',
                default: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                },
                corporate: {
                    color: colors.danger,
                    glow: {
                        params: '0 0 20px 0',
                        color: 'rgba (255, 107, 131, 0.5)',
                    },
                },
                cosmic: {
                    gradientLeft: "adjust-hue(" + colors.danger + ", -20deg)",
                    gradientRight: colors.danger,
                    bevel: "shade(" + colors.danger + ", 14%)",
                    shadow: 'rgba (33, 7, 77, 0.5)',
                    glow: {
                        params: '0 2px 12px 0',
                        color: "adjust-hue(" + colors.danger + ", -10deg)",
                    },
                },
            },
        ];
    };
    HeroButtonComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    HeroButtonComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-hero-buttons',
            styleUrls: ['./hero-buttons.component.scss'],
            templateUrl: './hero-buttons.component.html',
        }),
        tslib_1.__metadata("design:paramtypes", [theme_1.NbThemeService])
    ], HeroButtonComponent);
    return HeroButtonComponent;
}());
exports.HeroButtonComponent = HeroButtonComponent;
//# sourceMappingURL=hero-buttons.component.js.map