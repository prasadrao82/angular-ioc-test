"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var fruits_list_1 = require("./fruits-list");
var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.fruits = fruits_list_1.fruits;
        this.users = [
            { name: 'Carla Espinosa', title: 'Nurse' },
            { name: 'Bob Kelso', title: 'Doctor of Medicine' },
            { name: 'Janitor', title: 'Janitor' },
            { name: 'Perry Cox', title: 'Doctor of Medicine' },
            { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
        ];
    }
    ListComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-list',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.scss'],
        })
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map