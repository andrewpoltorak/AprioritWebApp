import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Employee';
import { Position } from './Position';

@Injectable()
export class DataService {

  private url = "/api/Employee";
  private urlPosition = "/api/Position";

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    return this.http.get(this.url);
  }

  getEmployee(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.url, employee);
  }

  getPositions() {
    return this.http.get(this.urlPosition);
  }

  createPosition(position: Position) {
    return this.http.post(this.urlPosition, position);
  }
}
