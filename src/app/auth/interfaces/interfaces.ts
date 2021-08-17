export interface Usuario {
  codigoUsuario: number;
  documentoIdentidad: string;
  nombre: string;
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
