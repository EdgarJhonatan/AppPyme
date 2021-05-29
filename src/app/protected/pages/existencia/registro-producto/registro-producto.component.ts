import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css'],
})
export class RegistroProductoComponent implements OnInit {
  articulo: any[] = ['Insecticida', 'Herbicida', 'Fungicida', 'Acaricida'];
  hide = true;

  miFormulario: FormGroup = this.fb.group({
    codigo: [''],
    descripcion: ['', [Validators.required]],
    articulo: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  agregarProducto() {
    console.log(this.miFormulario.value);
  }
}
