import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaborateursService } from 'src/app/services/collaborateurs.service';
import { employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-details-collaborateur',
  templateUrl: './details-collaborateur.component.html',
  styleUrls: ['./details-collaborateur.component.css']
})
export class DetailsCollaborateurComponent implements OnInit {
  idEmp: number;
  collaborateur;
  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: CollaborateursService
  ) {}

  ngOnInit() {
    this.idEmp = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getEmployee();
  }

  getEmployee() {
    return this.employeeService.getEmployeeById(this.idEmp).subscribe(
      data => {
        this.collaborateur = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
