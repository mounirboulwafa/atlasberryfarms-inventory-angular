import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { employee } from 'src/app/models/employee.model';
import { FunctionsService } from 'src/app/services/functions.service';
import { LocalisationsService } from 'src/app/services/localisations.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {
  idEmp: number;
  employee;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeesService
  ) {}

  ngOnInit() {
    this.idEmp = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getEmployee();
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
}
