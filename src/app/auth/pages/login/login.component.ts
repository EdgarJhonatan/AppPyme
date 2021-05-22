import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loading = false;
  hide = true;

  miFormulario: FormGroup = this.fb.group({
    usuario: ['46746901', [Validators.required]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router // private authService: AuthService
  ) {}

  login() {
    console.log(this.miFormulario.value);
    const { email, password } = this.miFormulario.value;
    this.fakeLoading();

    // this.authService.login(email, password).subscribe((codRes) => {
    //   console.log('respuesta login', codRes);
    //   if (codRes == '00') {
    //     this.router.navigateByUrl('/dashboard');
    //   } else {
    //     Swal.fire('Error', codRes, 'error');
    //   }
    // });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/protected']);
    }, 1500);
  }
}
