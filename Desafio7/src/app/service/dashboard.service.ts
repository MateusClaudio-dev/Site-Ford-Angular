import { Veiculo } from './../models/veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Version } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private  API_URL = "http://localhost:3001/vehicles"
  constructor(private httpClient: HttpClient ) {}

  obterCarros(): Observable<Veiculo[]> {// ausencia de observables
    return this.httpClient.get<Veiculo[]>(this.API_URL);
  }



// Um array com o id de cada carro e vinculado ao id as propiedades dos carros correspondente
//  organizarCarrosPorModelo(): Observable<Map<string, Veiculo[]>> {
//    return this.obterCarros().pipe(
//      map((carros: Veiculo[]) => {
//        const carroPorMarca = new Map<string, Veiculo[]();
//
//      })
//    ) // TIPE = encadeia outros operadores (aplica trasnformações no retorno da api)
//
//    )
//  }
//}
