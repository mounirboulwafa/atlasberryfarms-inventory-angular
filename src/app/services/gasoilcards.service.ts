import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GasoilCard } from '../models/affectation.model';

@Injectable({
  providedIn: 'root'
})
export class GasoilcardsService {
  baseURL = 'http://localhost:8080/gasoilcards/';

  id: number;
  constructor(private HttpClient: HttpClient) {}

  getGasoilCards() {
    return this.HttpClient.get(this.baseURL);
  }

  getGasoilCardById(id: number) {
    return this.HttpClient.get(this.baseURL + id);
  }

  searchGasoilCardByName(name: string) {
    return this.HttpClient.get(this.baseURL + 'search?name=' + name);
  }

  saveGasoilCard(gasoilcard: GasoilCard) {
    return this.HttpClient.post(this.baseURL, gasoilcard);
  }

  updateGasoilCard(gasoilcard: GasoilCard) {
    return this.HttpClient.put(this.baseURL + gasoilcard.idGasCard, gasoilcard);
  }

  deleteGasoilCard(id: number) {
    return this.HttpClient.delete(this.baseURL + id);
  }
}
