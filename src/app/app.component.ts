import { Component } from '@angular/core';
import { EmployeesComponent } from './employees';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [EmployeesComponent]
})
export class AppComponent {
  title = 'app works!';
}
