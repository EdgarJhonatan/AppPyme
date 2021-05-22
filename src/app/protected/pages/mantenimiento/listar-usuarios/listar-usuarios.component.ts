import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/protected/interfaces/usuario';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
})
export class ListarUsuariosComponent implements OnInit {
  listUsuarios: Usuario[] = [
    {
      documento: '46746901',
      nombres: 'Juan Pedro',
      apellidoPaterno: 'Ramos',
      apellidoMaterno: 'Oliva',
      email: 'juan@gmail.com',
      password: 'FGHTYS**!',
      tipoUsuario: 'ADM',
      sucursal: 'ADM',
    },
    {
      documento: '46746902',
      nombres: 'Elias Lorenzo',
      apellidoPaterno: 'Sanchez',
      apellidoMaterno: 'Cruz',
      email: 'lore@gmail.com',
      password: 'FGHTYS**!',
      tipoUsuario: 'USER',
      sucursal: 'ADM',
    },
    {
      documento: '46746903',
      nombres: 'Rosa Ana',
      apellidoPaterno: 'Cerro',
      apellidoMaterno: 'Santos',
      email: 'rosita@gmail.com',
      password: 'FGHTYS**!',
      tipoUsuario: 'USER',
      sucursal: 'ADM',
    },
    {
      documento: '46746904',
      nombres: 'Esther Petronila',
      apellidoPaterno: 'Vargas',
      apellidoMaterno: 'Oyola',
      email: 'petro@gmail.com',
      password: 'FGHTYS**!',
      tipoUsuario: 'USER',
      sucursal: 'ADM',
    },
  ];

  displayedColumns: string[] = [
    'documento',
    'nombres',
    'apellidoPaterno',
    'apellidoMaterno',
    'email',
    'tipoUsuario',
    'sucursal',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<any>;

  constructor() {}

  ngOnInit(): void {
    this.listUsuarios;
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number) {
    // this._usuarioService.eliminarUsuario(index);
    // this.cargarUsuario();
    // this._snackBar.open('El usuario fue eliminado con éxito.', '', {
    //   duration: 1500,
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top',
    // });
  }
}
