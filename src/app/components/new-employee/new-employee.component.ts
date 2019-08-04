import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../services/functions.service';
import { LocalisationsService } from '../../services/localisations.service';
import { ServicesService } from '../../services/services.service';
import { employee } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  functions;
  localisations;
  services;

  employee: employee = new employee();

  constructor(
    private functionService: FunctionsService,
    private localisationService: LocalisationsService,
    private servicesService: ServicesService,
    private employeeService: EmployeesService
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
    this.employeeService.saveEmployee(this.employee).subscribe(data => {
      alert('User created successfully.');
    });
  }
}
