import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/protected/interfaces/usuario';
import { UsuarioService } from 'src/app/protected/services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
})
export class ListarUsuariosComponent implements OnInit {
  listUsuarios: Usuario[] = [];

  displayedColumns: string[] = [
    'codigoUsuario',
    'documentoIdentidad',
    'nombres',
    'apellidoPaterno',
    'apellidoMaterno',
    'email',
    'role',
    'nombreSucursal',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<any>;

  columnas = [
    { titulo: 'ID', name: 'codigoUsuario' },
    { titulo: 'Documento Identidad', name: 'documentoIdentidad' },
    { titulo: 'Nombres', name: 'nombres' },
    { titulo: 'Apellido Paterno', name: 'apellidoPaterno' },
    { titulo: 'Apellido Materno', name: 'apellidoMaterno' },
    { titulo: 'Email', name: 'email' },
    { titulo: 'Tipo Usuario', name: 'role' },
    { titulo: 'Sucursal', name: 'nombreSucursal' },
  ];

  constructor(private listar: UsuarioService) {}

  ngOnInit(): void {
    this.listar.listarUsuarios().subscribe((usuario) => {
      this.listUsuarios = usuario;
      this.dataSource = new MatTableDataSource(this.listUsuarios);
    });
  }

  ngAfterViewInit() {
    this.listar.listarUsuarios().subscribe((usuario) => {
      this.listUsuarios = usuario;
      this.dataSource = new MatTableDataSource(this.listUsuarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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
