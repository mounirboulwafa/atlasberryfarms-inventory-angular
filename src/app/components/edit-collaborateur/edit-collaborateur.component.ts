import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaborateursService } from 'src/app/services/collaborateurs.service';
import { employee } from 'src/app/models/employee.model';
import { FunctionsService } from 'src/app/services/functions.service';
import { LocalisationsService } from 'src/app/services/localisations.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-edit-collaborateur',
  templateUrl: './edit-collaborateur.component.html',
  styleUrls: ['./edit-collaborateur.component.css']
})
export class EditCollaborateurComponent implements OnInit {
  idEmp: number;
  collaborateur;
  function;
  localisation;
  service;
  employee;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: CollaborateursService,
    private functionService: FunctionsService,
    private localisationService: LocalisationsService,
    private servicesService: ServicesService
  ) {}

  ngOnInit() {
    this.idEmp = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getEmployee();

    this.functionService.getFunctions().subscribe(data => {
      this.function = data;
    });

    this.localisationService.getLocalisations().subscribe(data => {
      this.localisation = data;
    });

    this.servicesService.getServices().subscribe(data => {
      this.service = data;
    });
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

  updateEmployee() {
    this.employeeService.updateEmployee(this.collaborateur).subscribe(data => {
      alert('User updated successfully.');
    });
  }
}
