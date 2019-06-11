"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng2_smart_table_1 = require("ng2-smart-table");
var smart_table_1 = require("../../../@core/data/smart-table");
var SmartTableComponent = /** @class */ (function () {
    function SmartTableComponent(service) {
        this.service = service;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number',
                },
                firstName: {
                    title: 'First Name',
                    type: 'string',
                },
                lastName: {
                    title: 'Last Name',
                    type: 'string',
                },
                username: {
                    title: 'Username',
                    type: 'string',
                },
                email: {
                    title: 'E-mail',
                    type: 'string',
                },
                age: {
                    title: 'Age',
                    type: 'number',
                },
            },
        };
        this.source = new ng2_smart_table_1.LocalDataSource();
        var data = this.service.getData();
        this.source.load(data);
    }
    SmartTableComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'ngx-smart-table',
            templateUrl: './smart-table.component.html',
            styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
        }),
        tslib_1.__metadata("design:paramtypes", [smart_table_1.SmartTableData])
    ], SmartTableComponent);
    return SmartTableComponent;
}());
exports.SmartTableComponent = SmartTableComponent;
//# sourceMappingURL=smart-table.component.js.map