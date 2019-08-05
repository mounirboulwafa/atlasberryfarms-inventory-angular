import { Component, OnInit } from '@angular/core';
import { VehiclesService } from 'src/app/services/vehicles.service';
import { Vehicle } from 'src/app/models/affectation.model';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.component.html',
  styleUrls: ['./new-vehicle.component.css']
})
export class NewVehicleComponent implements OnInit {
  vehicle = new Vehicle();
  constructor(private vehicleService: VehiclesService) {}

  ngOnInit() {}

  saveVehicle(): void {
    this.vehicleService.saveVehicle(this.vehicle).subscribe(data => {
      alert('Vehicle created successfully.');
    });
  }
}
