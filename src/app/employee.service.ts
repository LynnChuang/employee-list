import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise' ;

@Injectable()
export class EmployeeService {
  private heroesUrl='/handsome.json';
  public employees: Array<Employee>;
  constructor(private http: Http) {
    this.getEmployees().then(employees => this.employees = employees);
  }


  getEmployees(): Promise<Employee[]> {
    return this.http.get(this.heroesUrl)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response): Employee[]{
    let body=res.json();

    return body.data.map((model) =>{
      return new Employee(model.firstName,
                        model.middleName,
                        model.lastName);
    });
  }

  private handleError(){

  }
}
