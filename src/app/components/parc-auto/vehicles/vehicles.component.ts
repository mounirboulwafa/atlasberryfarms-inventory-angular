import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicleList;
  vehicleName: string;

  constructor(private vehicleService: VehiclesService) {}

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.vehicleService.getVehicles().subscribe(
      data => {
        this.vehicleList = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  searchVehicle() {
    this.vehicleService.searchVehicleByName(this.vehicleName).subscribe(
      data => {
        this.vehicleList = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteVehicle(Id: number) {
    this.vehicleService.deleteVehicle(Id).subscribe(
      data => {
        alert('Vehicle deleted.');
        this.getVehicles();
      },
      err => {
        console.log(err);
      }
    );
  }
}
