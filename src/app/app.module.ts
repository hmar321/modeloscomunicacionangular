import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingProvider, routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListaProductosComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
