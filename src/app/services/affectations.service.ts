import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Affectation } from '../models/affectation.model';

@Injectable({
  providedIn: 'root'
})
export class AffectationsService {
  baseURL = 'http://localhost:8080/affectations/';

  id: number;
  constructor(private HttpClient: HttpClient) {}

  getAffetations() {
    return this.HttpClient.get(this.baseURL);
  }

  getAffetationById(id: number) {
    return this.HttpClient.get(this.baseURL + id);
  }

  searchAffetationByEmpName(name: string) {
    return this.HttpClient.get(this.baseURL + 'search?emp=' + name);
  }

  searchAffetationByEmpId(id: number) {
    return this.HttpClient.get(this.baseURL + 'searchById/' + id);
  }

  saveAffetation(affetation: Affectation) {
    return this.HttpClient.post(this.baseURL, affetation);
  }

  updateEmployee(affetation: Affectation) {
    return this.HttpClient.put(
      this.baseURL + affetation.idAffectation,
      affetation
    );
  }

  deleteEmployee(id: number) {
    return this.HttpClient.delete(this.baseURL + id);
  }
}
