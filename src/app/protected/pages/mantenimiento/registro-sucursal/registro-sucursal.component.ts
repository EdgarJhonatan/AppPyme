import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-sucursal',
  templateUrl: './registro-sucursal.component.html',
  styleUrls: ['./registro-sucursal.component.css'],
})
export class RegistroSucursalComponent implements OnInit {
  hide = true;

  miFormulario: FormGroup = this.fb.group({
    codigo: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    serie: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  agregarSucursal() {
    console.log(this.miFormulario.value);
  }
}
