import { Veiculo, VeiculosAPI } from './../models/veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  private  API_URL = "http://localhost:3001/vehicles"
  constructor(private httpClient: HttpClient ) {}

  obterCarros(): Observable<VeiculosAPI> {
    return this.httpClient.get<VeiculosAPI>(this.API_URL);
  }


// Um array com o id de cada carro e vinculado ao id as propiedades dos carros correspondente
//  organizarCarrosPorModelo(): Observable<Map<string, Veiculo[]>> {
//    
//    return this.obterCarros().pipe( // TIPE = encadeia outros operadores (aplica trasnformações no retorno da api)
//      map((carros: Veiculo[]) => {
//        const carrosPorMarca = new Map<string, Veiculo[]>();
//
//        carros.forEach((carros: Veiculo) => {
//          const marcaId = typeof carros.id === 'string' ? carros.id : carros.id
//
//          if (marcaId) {
//            if(!carrosPorMarca.has(marcaId)) {
//              carrosPorMarca.set(marcaId, [])
//            }
//            carrosPorMarca.get(marcaId)?.push(carros)
//          }
//          
//        })
//        return carrosPorMarca
//      })
//    )
//
//  }
}
