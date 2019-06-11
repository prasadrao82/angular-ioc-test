"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        this.nodes = [{
                name: 'Programming languages by programming paradigm',
                children: [{
                        name: 'Object-oriented programming',
                        children: [{
                                name: 'Java',
                            }, {
                                name: 'C++',
                            }, {
                                name: 'C#',
                            }],
                    }, {
                        name: 'Prototype-based programming',
                        children: [{
                                name: 'JavaScript',
                            }, {
                                name: 'CoffeeScript',
                            }, {
                                name: 'Lua',
                            }],
                    }],
            }];
    }
    TreeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-tree',
            templateUrl: './tree.component.html',
            styleUrls: ['./tree.component.scss'],
        })
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=tree.component.js.map