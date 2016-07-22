import { Component, OnInit } from '@angular/core';
import { EmployeeListComponent } from '../employee-list';
import { EmployeeFormComponent } from '../employee-form';
import { EmployeeService } from '../employee.service';

@Component({
  moduleId: module.id,
  selector: 'app-employees',
  templateUrl: 'employees.component.html',
  styleUrls: ['employees.component.css'],
  directives: [EmployeeListComponent, EmployeeFormComponent],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
