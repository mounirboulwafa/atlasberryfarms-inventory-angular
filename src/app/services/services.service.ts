import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseURL = 'http://localhost:8080/services/';

  id: number;
  constructor(private HttpClient: HttpClient) {}

  getServices(): Observable<any> {
    return this.HttpClient.get(this.baseURL);
  }

  getServicesById(id: number) {
    return this.HttpClient.get(this.baseURL + id);
  }

  getServicesByName(name: string) {
    return this.HttpClient.get(this.baseURL + 'search?name=' + name);
  }
}
