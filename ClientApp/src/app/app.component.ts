import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})

export class AppComponent implements OnInit {
  employee: Employee = new Employee();   // изменяемый сотрудник
  employees: Employee[];                // массив сотрудников
  tableMode: boolean = true;          // табличный режим

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadEmployees();    // загрузка данных при старте компонента  
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
    }
    this.cancel();
  }

  cancel() {
    this.employee = new Employee();
    this.tableMode = true;
  }

  add() {
    this.cancel();
    this.tableMode = false;
  }

  addPosition() {

  }
}
