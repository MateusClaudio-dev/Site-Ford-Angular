import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private API_URL = "http://localhost:3001/login";

  constructor(private http: HttpClient) {}

  efetuarLogin(credenciais: { nome: string; senha: string }): Observable<any> {
    return this.http.post<any>(this.API_URL, credenciais);
  }
}
