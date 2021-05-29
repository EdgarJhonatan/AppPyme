import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-articulo',
  templateUrl: './registro-articulo.component.html',
  styleUrls: ['./registro-articulo.component.css'],
})
export class RegistroArticuloComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    codigo: [''],
    descripcion: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  agregarArticulo() {
    console.log(this.miFormulario.value);
  }
}
