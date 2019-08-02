import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CollaborateursService } from 'src/app/services/collaborateurs.service';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css']
})
export class CollaborateursComponent implements OnInit {
  collaborateurs;
  employeeName: string;

  constructor(private employeeService: CollaborateursService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployess().subscribe(
      data => {
        this.collaborateurs = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  searchEmployee() {
    this.employeeService.searchEployeeByName(this.employeeName).subscribe(
      data => {
        this.collaborateurs = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteEmployee(Id) {
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
