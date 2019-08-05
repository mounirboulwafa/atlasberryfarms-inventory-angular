import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../models/affectation.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseURL = 'http://localhost:8080/vehicles/';

  id: number;
  constructor(private HttpClient: HttpClient) {}

  getVehicles() {
    return this.HttpClient.get(this.baseURL);
  }

  getVehicleById(id: number) {
    return this.HttpClient.get(this.baseURL + id);
  }

  searchVehicleByName(name: string) {
    return this.HttpClient.get(this.baseURL + 'search?name=' + name);
  }

  saveVehicle(vehicle: Vehicle) {
    return this.HttpClient.post(this.baseURL, vehicle);
  }

  updateVehicle(vehicle: Vehicle) {
    return this.HttpClient.put(this.baseURL + vehicle.idVehicle, vehicle);
  }

  deleteVehicle(id: number) {
    return this.HttpClient.delete(this.baseURL + id);
  }
}
