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

  constructor(private employeeService: CollaborateursService) {}

  ngOnInit() {
    this.employeeService.getEmployess().subscribe(
      data => {
        this.collaborateurs = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  searchEmployee(name) {
    this.employeeService.searchEployeeByName(name).subscribe(
      data => {
        this.collaborateurs = data;
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
