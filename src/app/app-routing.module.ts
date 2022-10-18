import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductosComponent } from './componentes/actualizar-productos/actualizar-productos.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { CalculadoraMedidasComponent } from './componentes/calculadora-medidas/calculadora-medidas.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UtilidadesComponent } from './componentes/utilidades/utilidades.component';

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "ActualizarProducto", component: ActualizarProductosComponent },
  { path: "AgregarProducto", component: AgregarProductoComponent},
  { path: "Utilidades", component: UtilidadesComponent },
  {path: "Unidades", component : CalculadoraMedidasComponent},
  {path: "Productos", component : ProductosComponent},
  { path: "", redirectTo: 'Home', pathMatch: "full" },
  { path: "**", redirectTo: 'Home', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
