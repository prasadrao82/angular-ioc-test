"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var eva_icons_1 = require("eva-icons");
var EvaIconsPipe = /** @class */ (function () {
    function EvaIconsPipe(sanitizer) {
        this.sanitizer = sanitizer;
        this.defaultOptions = {
            height: 24,
            width: 24,
            fill: 'inherit',
            animationHover: true,
            animationInfinity: false,
        };
    }
    EvaIconsPipe.prototype.transform = function (icon, options) {
        var mergedOptions = tslib_1.__assign({}, this.defaultOptions, options);
        var width = mergedOptions.width, height = mergedOptions.height, fill = mergedOptions.fill, animationType = mergedOptions.animationType, animationHover = mergedOptions.animationHover, animationInfinity = mergedOptions.animationInfinity;
        var animation = animationType ?
            { type: animationType, hover: animationHover, infinite: animationInfinity } :
            null;
        return this.sanitizer.bypassSecurityTrustHtml(eva_icons_1.icons[icon].toSvg({
            width: width,
            height: height,
            fill: fill,
            animation: animation,
        }));
    };
    EvaIconsPipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'eva' }),
        tslib_1.__metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], EvaIconsPipe);
    return EvaIconsPipe;
}());
exports.EvaIconsPipe = EvaIconsPipe;
//# sourceMappingURL=eva-icons.pipe.js.map