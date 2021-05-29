import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from 'src/app/protected/interfaces/articulo';

@Component({
  selector: 'app-listar-articulo',
  templateUrl: './listar-articulo.component.html',
  styleUrls: ['./listar-articulo.component.css'],
})
export class ListarArticuloComponent implements OnInit {
  listArticulos: Articulo[] = [
    {
      codigo: '1',
      descripcion: 'Insecticida',
    },
    {
      codigo: '2',
      descripcion: 'Herbicida',
    },
    {
      codigo: '3',
      descripcion: 'Fungicida',
    },
    {
      codigo: '4',
      descripcion: 'Acaricida',
    },
  ];

  displayedColumns: string[] = ['codigo', 'descripcion', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<any>;

  constructor() {}

  ngOnInit(): void {
    this.listArticulos;
    this.dataSource = new MatTableDataSource(this.listArticulos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarArticulo(index: number) {
    // this._usuarioService.eliminarUsuario(index);
    // this.cargarUsuario();
    // this._snackBar.open('El usuario fue eliminado con éxito.', '', {
    //   duration: 1500,
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    // });
  }
}
