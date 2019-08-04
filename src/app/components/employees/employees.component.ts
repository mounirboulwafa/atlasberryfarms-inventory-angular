import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeesService } from 'src/app/services/employees.service';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees;
  employeeName: string;

  constructor(private employeeService: EmployeesService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployess().subscribe(
      data => {
        this.employees = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  searchEmployee() {
    this.employeeService.searchEployeeByName(this.employeeName).subscribe(
      data => {
        this.employees = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteEmployee(Id: number) {
    this.employeeService.deleteEmployee(Id).subscribe(
      data => {
        alert('User deleted.');
        this.getEmployees();
      },
      err => {
        console.log(err);
      }
    );
  }

  // onGetCollaborateurs() {
  //   this.httpClient.get('http://localhost:8080/employees').subscribe(
  //     data => {
  //       this.collaborateurs = data;
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
}
