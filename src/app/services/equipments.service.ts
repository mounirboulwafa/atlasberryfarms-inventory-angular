import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipment } from '../models/affectation.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {
  baseURL = 'http://localhost:8080/equipments/';

  constructor(private HttpClient: HttpClient) {}

  getEquipments() {
    return this.HttpClient.get(this.baseURL);
  }

  getEquipmentById(id: number) {
    return this.HttpClient.get(this.baseURL + id);
  }

  searchEquipmentByName(name: string) {
    return this.HttpClient.get(this.baseURL + 'search?name=' + name);
  }

  saveEquipment(equipment: Equipment) {
    return this.HttpClient.post(this.baseURL, equipment);
  }

  updateEquipment(equipment: Equipment) {
    return this.HttpClient.put(this.baseURL + equipment.idEquipment, equipment);
  }

  deleteEquipment(id: number) {
    return this.HttpClient.delete(this.baseURL + id);
  }
}
