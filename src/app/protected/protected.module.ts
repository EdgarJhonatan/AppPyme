import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProtectedRoutingModule } from './protected-routing.module';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroClienteComponent } from './pages/ventas/registro-cliente/registro-cliente.component';
import { RegistroVentaComponent } from './pages/ventas/registro-venta/registro-venta.component';
import { RegistroCobranzaComponent } from './pages/ventas/registro-cobranza/registro-cobranza.component';
import { ReporteFacturaCobrarComponent } from './pages/ventas/reporte-factura-cobrar/reporte-factura-cobrar.component';
import { RegistroCompraComponent } from './pages/compras/registro-compra/registro-compra.component';
import { RegistroProveedorComponent } from './pages/compras/registro-proveedor/registro-proveedor.component';
import { RegistroPagoComponent } from './pages/compras/registro-pago/registro-pago.component';
import { ReporteProveedorPagarComponent } from './pages/compras/reporte-proveedor-pagar/reporte-proveedor-pagar.component';
import { RegistroProductoComponent } from './pages/existencia/registro-producto/registro-producto.component';
import { RegistroArticuloComponent } from './pages/existencia/registro-articulo/registro-articulo.component';
import { ReporteStockComponent } from './pages/existencia/reporte-stock/reporte-stock.component';
import { RegistroUsuarioComponent } from './pages/mantenimiento/registro-usuario/registro-usuario.component';
import { RegistroSucursalComponent } from './pages/mantenimiento/registro-sucursal/registro-sucursal.component';
import { ReporteVentaComponent } from './pages/ventas/reporte-venta/reporte-venta.component';
import { ListarUsuariosComponent } from './pages/mantenimiento/listar-usuarios/listar-usuarios.component';
import { FormsModule } from '@angular/forms';
import { ListarSucursalComponent } from './pages/mantenimiento/listar-sucursal/listar-sucursal.component';
import { ListarProductoComponent } from './pages/existencia/listar-producto/listar-producto.component';
import { ListarArticuloComponent } from './pages/existencia/listar-articulo/listar-articulo.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    RegistroClienteComponent,
    RegistroVentaComponent,
    RegistroCobranzaComponent,
    ReporteVentaComponent,
    ReporteFacturaCobrarComponent,
    RegistroCompraComponent,
    RegistroProveedorComponent,
    RegistroPagoComponent,
    ReporteProveedorPagarComponent,
    RegistroProductoComponent,
    RegistroArticuloComponent,
    ReporteStockComponent,
    RegistroUsuarioComponent,
    RegistroSucursalComponent,
    ListarUsuariosComponent,
    ListarSucursalComponent,
    ListarProductoComponent,
    ListarArticuloComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
})
export class ProtectedModule {}
