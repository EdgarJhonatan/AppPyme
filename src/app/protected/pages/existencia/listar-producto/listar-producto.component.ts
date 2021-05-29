import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Productos } from 'src/app/protected/interfaces/producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
})
export class ListarProductoComponent implements OnInit {
  listProductos: Productos[] = [
    {
      codigo: '1',
      descripcion: 'Clorfos 48 CE',
      articulo: 'Insecticida',
    },
    {
      codigo: '2',
      descripcion: 'Arrow',
      articulo: 'Herbicida',
    },
    {
      codigo: '3',
      descripcion: 'Golden 40 EC',
      articulo: 'Fungicida',
    },
    {
      codigo: '4',
      descripcion: 'Rampa',
      articulo: 'Acaricida',
    },
  ];

  displayedColumns: string[] = [
    'codigo',
    'descripcion',
    'articulo',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<any>;

  constructor() {}

  ngOnInit(): void {
    this.listProductos;
    this.dataSource = new MatTableDataSource(this.listProductos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarProducto(index: number) {
    // this._usuarioService.eliminarUsuario(index);
    // this.cargarUsuario();
    // this._snackBar.open('El usuario fue eliminado con éxito.', '', {
    //   duration: 1500,
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    // });
  }
}
