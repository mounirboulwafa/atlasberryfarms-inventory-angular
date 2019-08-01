import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../services/functions.service';
import { LocalisationsService } from '../services/localisations.service';
import { ServicesService } from '../services/services.service';
import { employee } from '../models/employee.model';
import { CollaborateursService } from '../services/collaborateurs.service';

@Component({
  selector: 'app-new-collaborateur',
  templateUrl: './new-collaborateur.component.html',
  styleUrls: ['./new-collaborateur.component.css']
})
export class NewCollaborateurComponent implements OnInit {
  functions;
  localisations;
  services;

  employee: employee = new employee();

  constructor(
    private functionService: FunctionsService,
    private localisationService: LocalisationsService,
    private servicesService: ServicesService,
    private collaborateurService: CollaborateursService
  ) {}

  ngOnInit() {
    this.functionService.getFunctions().subscribe(data => {
      this.functions = data;
    });

    this.localisationService.getLocalisations().subscribe(data => {
      this.localisations = data;
    });

    this.servicesService.getServices().subscribe(data => {
      this.services = data;
    });
  }

  saveEmployee(): void {
    this.collaborateurService.saveEmployee(this.employee).subscribe(data => {
      alert('User created successfully.');
    });
  }
}
