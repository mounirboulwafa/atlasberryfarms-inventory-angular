import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class CollaborateursService {
  baseURL = 'http://localhost:8080/employees/';

  id: number;
  constructor(private HttpClient: HttpClient) {}

  getEmployess() {
    return this.HttpClient.get(this.baseURL);
  }

  getEmployeeById(id: number) {
    return this.HttpClient.get(this.baseURL + id);
  }

  searchEployeeByName(name: string) {
    return this.HttpClient.get(this.baseURL + 'search?name=' + name);
  }

  saveEmployee(employee: employee) {
    return this.HttpClient.post(this.baseURL, employee);
  }

  deleteEmployee(employee: employee) {
    return this.HttpClient.delete(this.baseURL + employee.idEmp);
  }
}
