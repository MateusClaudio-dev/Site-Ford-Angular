import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

   //'http://localhost:3001/'

  private readonly API = 'http://localhost:3001'
  constructor(private http: HttpClient ) {}

  getVehicles() {
    
  }
  
}
