import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './componentes/navigation-bar/navigation-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { UtilidadesComponent } from './componentes/utilidades/utilidades.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculadoraMedidasComponent } from './componentes/calculadora-medidas/calculadora-medidas.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ActualizarProductosComponent } from './componentes/actualizar-productos/actualizar-productos.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HomeComponent,
    UtilidadesComponent,
    CalculadoraMedidasComponent,
    ProductosComponent,
    ActualizarProductosComponent,
    AgregarProductoComponent
  ],
  imports: [ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
