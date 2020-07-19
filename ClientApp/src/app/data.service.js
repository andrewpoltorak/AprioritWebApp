"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@Injectable()
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "/api/Employee";
    }
    DataService.prototype.getEmployees = function () {
        return this.http.get(this.url);
    };
    DataService.prototype.getEmployee = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    DataService.prototype.createEmployee = function (employee) {
        return this.http.post(this.url, employee);
    };
    DataService.prototype.updateEmployee = function (employee) {
        return this.http.put(this.url, employee);
    };
    DataService.prototype.deleteEmployee = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map