import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Usuario, loginResponse } from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) {}

  logIn(usuario: string, password: string) {
    const url = `${this.baseUrl}/ms/v1/usuario/login`;
    const body = { usuario, password };

    console.log('url: ', url);
    console.log('body: ', body);

    return this.http.post<loginResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.codRes == '00') {
          localStorage.setItem('token', resp.token!);
        }
      }),
      map((resp) => resp),
      catchError((err) => of(err.error))
    );
  }

  listarUsuarios() {
    const url = `${this.baseUrl}/ms/v1/usuario/listar?codigo&tipoAccion=2`;

    console.log('url: ', url);

    return this.http.get<loginResponse>(url).pipe(
      tap((resp) => {
        if (resp.codRes == '00') {
          //localStorage.setItem('token', resp.token!);
        }
      }),
      map((resp) => resp.data),
      catchError((err) => of(err.error))
    );
  }
}
