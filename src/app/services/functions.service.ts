import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  baseURL = 'http://localhost:8080/functions/';

  id: number;
  constructor(private HttpClient: HttpClient) {}

  getFunctions(): Observable<any> {
    return this.HttpClient.get(this.baseURL);
  }

  getFunctionsById(id: number) {
    return this.HttpClient.get(this.baseURL + id);
  }

  getFunctionsByName(name: string) {
    return this.HttpClient.get(this.baseURL + 'search?name=' + name);
  }
}
