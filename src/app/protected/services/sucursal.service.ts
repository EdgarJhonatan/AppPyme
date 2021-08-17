import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Sucursal } from 'src/app/protected/interfaces/sucursal';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  listarSucursal() {
    const url = `${this.baseUrl}/ms/v1/sucursal/listar?codigo&tipoAccion=2`;

    return this.http.get<Sucursal>(url).pipe(
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
