import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { LocalisationsService } from 'src/app/services/localisations.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  idEmp: number;
  employee;
  function;
  localisation;
  service;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeesService,
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
        this.employee = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee).subscribe(data => {
      alert('User updated successfully.');
    });
  }
}
