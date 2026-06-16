import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private  API_URL = "http://localhost:3001/vehicles"
  constructor(private httpClient: HttpClient ) {}

  obterCarros() {// ausencia de observables
    return this.httpClient.get(this.API_URL);
  }
  
}
