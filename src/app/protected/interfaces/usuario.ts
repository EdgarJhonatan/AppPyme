export interface Usuario {
  codRes: string;
  message: string;
  codigoUsuario: number;
  documentoIdentidad: string;
  nombres: string;
  apellidoMaterno: string;
  apellidoPaterno: string;
  nombreSucursal: string;
  estado: boolean;
  email: string;
  role: string;
}

export interface loginResponse {
  codRes: string;
  message: string;
  data: string;
  documentoIdentidad: string;
  sucursal: number;
  codigoUsuario: number;
  estado: boolean;
  apellidoMaterno: string;
  apellidoPaterno: string;
  email: string;
  role: string;
  nombres: string;
  token: string;
}
