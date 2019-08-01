import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalisationsService {
  baseURL = 'http://localhost:8080/localisations/';

  id: number;
  constructor(private HttpClient: HttpClient) {}

  getLocalisations(): Observable<any> {
    return this.HttpClient.get(this.baseURL);
  }

  getLocalisationsById(id: number) {
    return this.HttpClient.get(this.baseURL + id);
  }

  getLocalisationsByName(name: string) {
    return this.HttpClient.get(this.baseURL + 'search?name=' + name);
  }
}
