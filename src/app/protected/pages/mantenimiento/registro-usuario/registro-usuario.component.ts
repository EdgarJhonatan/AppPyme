import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/protected/services/usuario.service';
import { SucursalService } from 'src/app/protected/services/sucursal.service';
import Swal from 'sweetalert2';
import { Sucursal } from 'src/app/protected/interfaces/sucursal';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css'],
})
export class RegistroUsuarioComponent implements OnInit {
  role: any[] = ['ADMIN', 'USER_ROLE'];
  hide = true;
  listSucursal: Sucursal[] = [];

  miFormulario: FormGroup = this.fb.group({
    documentoIdentidad: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    apellidoPaterno: ['', [Validators.required]],
    apellidoMaterno: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    role: ['', [Validators.required]],
    sucursal: ['', [Validators.required]],
  });

  //Llenar selectores
  sucursal: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private sucursalService: SucursalService
  ) {}

  ngOnInit(): void {
    this.sucursalService.listarSucursal().subscribe((sucursal) => {
      this.listSucursal = sucursal;
    });
  }

  agregarUsuario() {
    const js_data = this.miFormulario.value;
    js_data.tipoAccion = 1; //Registrar
    js_data.sucursal = js_data.sucursal.codigoSucursal;
    console.log('Salida: ', js_data);

    this.usuarioService.registrarUsuarios(js_data).subscribe((resp) => {
      if (resp.codRes == '00') {
        //Redireccionamos al dashboard
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${resp.message}`,
          showConfirmButton: false,
          timer: 1000,
        });
        this.router.navigate(['/protected/mantenimiento/listar-usuario']);
        //this.fakeLoading();
      } else {
        //Swal.fire('Error', resp.message, 'error');
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: resp.message,
        });
        // this.error();
        this.miFormulario.reset();
      }
    });
  }
}
