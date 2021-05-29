import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sucursal } from 'src/app/protected/interfaces/sucursal';

@Component({
  selector: 'app-listar-sucursal',
  templateUrl: './listar-sucursal.component.html',
  styleUrls: ['./listar-sucursal.component.css'],
})
export class ListarSucursalComponent implements OnInit {
  listSucursal: Sucursal[] = [
    {
      codigo: 'MM001',
      nombre: 'Tienda 1',
      direccion: 'Av. Los pinos 480',
      serie: '001',
    },
    {
      codigo: 'MM002',
      nombre: 'Tienda 2',
      direccion: 'Av. Gramdales Bajo 103',
      serie: '003',
    },
    {
      codigo: 'MM003 ',
      nombre: 'Tienda 3',
      direccion: 'Av. Las flores 134',
      serie: '003',
    },
    {
      codigo: 'MM004',
      nombre: 'Tienda 4',
      direccion: 'Av. San Juan 432',
      serie: '004',
    },
  ];

  displayedColumns: string[] = [
    'codigo',
    'nombre',
    'direccion',
    'serie',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<any>;

  constructor() {}

  ngOnInit(): void {
    this.listSucursal;
    this.dataSource = new MatTableDataSource(this.listSucursal);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarSucursal(index: number) {
    // this._usuarioService.eliminarUsuario(index);
    // this.cargarUsuario();
    // this._snackBar.open('El usuario fue eliminado con éxito.', '', {
    //   duration: 1500,
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    // });
  }
}
