import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  moduleId: module.id,
  selector: 'app-employee-form',
  templateUrl: 'employee-form.component.html',
  styleUrls: ['employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  private employee: Employee;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employee=new Employee();
  }

  onSubmit(){
    this.employeeService.employees.push(this.employee);
    this.employee=new Employee();
  }
}
