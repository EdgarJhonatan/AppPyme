import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistroCompraComponent } from './pages/compras/registro-compra/registro-compra.component';
import { RegistroPagoComponent } from './pages/compras/registro-pago/registro-pago.component';
import { RegistroProveedorComponent } from './pages/compras/registro-proveedor/registro-proveedor.component';
import { ReporteCompraComponent } from './pages/compras/reporte-compra/reporte-compra.component';
import { ReporteProveedorPagarComponent } from './pages/compras/reporte-proveedor-pagar/reporte-proveedor-pagar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListarArticuloComponent } from './pages/existencia/listar-articulo/listar-articulo.component';
import { ListarProductoComponent } from './pages/existencia/listar-producto/listar-producto.component';
import { RegistroArticuloComponent } from './pages/existencia/registro-articulo/registro-articulo.component';
import { RegistroProductoComponent } from './pages/existencia/registro-producto/registro-producto.component';
import { ReporteStockComponent } from './pages/existencia/reporte-stock/reporte-stock.component';
import { ListarSucursalComponent } from './pages/mantenimiento/listar-sucursal/listar-sucursal.component';
import { ListarUsuariosComponent } from './pages/mantenimiento/listar-usuarios/listar-usuarios.component';
import { RegistroSucursalComponent } from './pages/mantenimiento/registro-sucursal/registro-sucursal.component';
import { RegistroUsuarioComponent } from './pages/mantenimiento/registro-usuario/registro-usuario.component';
import { RegistroClienteComponent } from './pages/ventas/registro-cliente/registro-cliente.component';
import { RegistroCobranzaComponent } from './pages/ventas/registro-cobranza/registro-cobranza.component';
import { RegistroVentaComponent } from './pages/ventas/registro-venta/registro-venta.component';
import { ReporteFacturaCobrarComponent } from './pages/ventas/reporte-factura-cobrar/reporte-factura-cobrar.component';
import { ReporteVentaComponent } from './pages/ventas/reporte-venta/reporte-venta.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      //Ruta hijas Ventas
      {
        path: 'ventas/registro-cliente',
        component: RegistroClienteComponent,
      },
      {
        path: 'ventas/registro-venta',
        component: RegistroVentaComponent,
      },
      {
        path: 'ventas/registro-cobranza',
        component: RegistroCobranzaComponent,
      },
      {
        path: 'ventas/reporte-venta',
        component: ReporteVentaComponent,
      },
      {
        path: 'ventas/reporte-factura-cobrar',
        component: ReporteFacturaCobrarComponent,
      },
      //Ruta hijas Compras
      {
        path: 'compras/registro-compra',
        component: RegistroCompraComponent,
      },
      {
        path: 'compras/registro-proveedor',
        component: RegistroProveedorComponent,
      },
      {
        path: 'compras/registro-pago',
        component: RegistroPagoComponent,
      },
      {
        path: 'compras/reporte-compra',
        component: ReporteCompraComponent,
      },
      {
        path: 'compras/reporte-proveedor-pagar',
        component: ReporteProveedorPagarComponent,
      },
      //Ruta hija Existencia
      {
        path: 'existencia/registro-producto',
        component: RegistroProductoComponent,
      },
      {
        path: 'existencia/listar-producto',
        component: ListarProductoComponent,
      },
      {
        path: 'existencia/registro-articulo',
        component: RegistroArticuloComponent,
      },
      {
        path: 'existencia/listar-articulo',
        component: ListarArticuloComponent,
      },
      {
        path: 'existencia/reporte-stock',
        component: ReporteStockComponent,
      },
      //Ruta hija Mantenimiento
      {
        path: 'mantenimiento/registro-usuario',
        component: RegistroUsuarioComponent,
      },
      {
        path: 'mantenimiento/listar-usuario',
        component: ListarUsuariosComponent,
      },
      {
        path: 'mantenimiento/listar-sucursal',
        component: ListarSucursalComponent,
      },
      {
        path: 'mantenimiento/registro-sucursal',
        component: RegistroSucursalComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
