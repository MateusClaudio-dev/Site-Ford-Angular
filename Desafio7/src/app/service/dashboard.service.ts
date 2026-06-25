import { VeiculosAPI, TelemetriaVeiculo } from './../models/veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private API_URL = "https://api-ford-2ecp.onrender.com/vehicles";
  private DATA_URL = "https://api-ford-2ecp.onrender.com/vehicleData";
  constructor(private httpClient: HttpClient ) {}

  obterCarros(): Observable<VeiculosAPI> {
    return this.httpClient.get<VeiculosAPI>(this.API_URL);
  }

  obterDadosPorVin(codigoDigitado: string): Observable<TelemetriaVeiculo> {
    return this.httpClient.post<TelemetriaVeiculo>(this.DATA_URL, { vin: codigoDigitado })
  }
}
