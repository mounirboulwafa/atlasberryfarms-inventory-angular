import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../models/affectation.model';

@Injectable({
  providedIn: 'root'
})
export class FurnituresService {
  baseURL = 'http://localhost:8080/furnitures/';

  constructor(private HttpClient: HttpClient) {}

  getFurnitures() {
    return this.HttpClient.get(this.baseURL);
  }

  getFurnitureById(id: number) {
    return this.HttpClient.get(this.baseURL + id);
  }

  searchFurnitureByName(name: string) {
    return this.HttpClient.get(this.baseURL + 'search?name=' + name);
  }

  saveFurniture(furniture: Furniture) {
    return this.HttpClient.post(this.baseURL, furniture);
  }

  updateFurniture(furniture: Furniture) {
    return this.HttpClient.put(this.baseURL + furniture.idFurniture, Furniture);
  }

  deleteFurniture(id: number) {
    return this.HttpClient.delete(this.baseURL + id);
  }
}
