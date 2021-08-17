import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Usuario, loginResponse } from 'src/app/protected/interfaces/usuario';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  constructor(private http: HttpClient) {}

  listarUsuarios() {
    const url = `${this.baseUrl}/ms/v1/usuario/listar?codigo&tipoAccion=2`;

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

  registrarUsuarios(js_data: object) {
    const url = `${this.baseUrl}/ms/v1/usuario/addUser`;

    return this.http.post<loginResponse>(url, js_data).pipe(
      tap((resp) => {
        if (resp.codRes == '00') {
          //localStorage.setItem('token', resp.token!);
        }
      }),
      map((resp) => resp),
      catchError((err) => of(err.error))
    );
  }
}
