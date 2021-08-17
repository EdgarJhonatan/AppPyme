export interface Usuario {
  usuario: string;
  nombre: string;
  apellido: string;
  sexo: string;
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
