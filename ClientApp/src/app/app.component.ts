import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './Employee';
import { Position } from './Position';
import { error } from '@angular/compiler/src/util';
//import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})

export class AppComponent implements OnInit {
  employee: Employee = new Employee();
  employees: Employee[];
  position: Position = new Position();
  positions: Position[];
  tableMode: number = 1;
  errors: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadEmployees();    // загрузка данных при старте компонента
    this.loadPositions();
  }

  // получаем данные через сервис
  loadEmployees() {
    this.dataService.getEmployees()
      .subscribe((data: Employee[]) => this.employees = data);
  }

  // сохранение данных
  save() {
    if (this.employee.Id == null) {
      this.dataService.createEmployee(this.employee)
        .subscribe((data: Employee) => this.employees.push(data));
      alert("Новый сотрудник добавлен");
    }
    this.cancel();
  }

  cancel() {
    this.employee = new Employee();
    this.tableMode = 1;
  }

  add() {
    this.cancel();
    this.tableMode = 2;
  }

  loadPositions() {
    this.dataService.getPositions()
      .subscribe((data: Position[]) => this.positions = data);
  }

  savePosition() {
    if (this.position.Id == null) {
      this.dataService.createPosition(this.position)
        .subscribe((data: Position) => this.positions.push(data));
      alert("Должность добавлена");
    }
    this.cancel();
  }

  cancelPosition() {
    this.position = new Position();
    this.tableMode = 1;
  }

  addPosition() {
    this.cancel();
    this.tableMode = 3;
  }
}
