import { Component, OnInit } from '@angular/core';
import { Affectation } from 'src/app/models/affectation.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { AffectationsService } from 'src/app/services/affectations.service';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { EquipmentsService } from 'src/app/services/equipments.service';
import { FurnituresService } from 'src/app/services/furnitures.service';
import { GasoilcardsService } from 'src/app/services/gasoilcards.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-affectation',
  templateUrl: './new-affectation.component.html',
  styleUrls: ['./new-affectation.component.css']
})
export class NewAffectationComponent implements OnInit {
  affectation: Affectation = new Affectation();
  employees;
  equipments;
  furnitures;
  vehicles;
  gasoilCards;

  constructor(
    private employeeService: EmployeesService,
    private affectationService: AffectationsService,
    private vehicleService: VehiclesService,
    private equipmentService: EquipmentsService,
    private FurnitureService: FurnituresService,
    private GasoilCardService: GasoilcardsService
  ) {}

  ngOnInit() {
    this.getEmployees();
    this.getGasoilCards();
    this.getEquipments();
    this.getFurnitures();
    this.getVehicles();
  }

  dateFormat(date: string) {
    return new DatePipe('fr').transform(date, 'dd/MM/yyyy');
  }

  parseDate(dateString: string) {
    if (dateString) {
      return new DatePipe('en-US').transform(dateString, 'dd/MM/yyyy');
    }
    return null;
  }

  getEmployees() {
    this.employeeService.getEmployess().subscribe(data => {
      this.employees = data;
    });
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  getEquipments() {
    this.equipmentService.getEquipments().subscribe(data => {
      this.equipments = data;
    });
  }

  getFurnitures() {
    this.FurnitureService.getFurnitures().subscribe(data => {
      this.furnitures = data;
    });
  }

  getGasoilCards() {
    this.GasoilCardService.getGasoilCards().subscribe(data => {
      this.gasoilCards = data;
    });
  }

  saveEAffectation(): void {
    this.affectationService.saveAffetation(this.affectation).subscribe(data => {
      alert('Affectation created successfully.');
    });
  }
}
