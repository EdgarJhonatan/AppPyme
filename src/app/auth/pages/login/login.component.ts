import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  miFormulario: FormGroup;
  loading = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: AuthService
  ) {
    this.miFormulario = this.fb.group({
      usuario: ['12345678', Validators.required],
      password: ['admin', Validators.required],
      //password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  logIng() {
    console.log(this.miFormulario.value);
    const { usuario, password } = this.miFormulario.value;

    this.usuarioService.logIn(usuario, password).subscribe((resp) => {
      console.log('respuesta en componente', resp);
      if (resp.codRes == '00') {
        //Redireccionamos al dashboard
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Bienvenido, ${resp.nombres}`,
          showConfirmButton: false,
          timer: 1000,
        });
        this.loading = true;
        this.router.navigate(['/protected']);
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
  /*
  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/protected']);
    }, 1500);
  }
  */
}
