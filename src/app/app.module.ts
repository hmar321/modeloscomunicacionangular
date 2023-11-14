import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutingProvider, routing } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { HijococheComponent } from './components/hijocoche/hijocoche.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { HijodeporteComponent } from './components/hijodeporte/hijodeporte.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListaProductosComponent,
    DetalleProductoComponent,
    HijococheComponent,
    PadrecochesComponent,
    PadredeportesComponent,
    HijodeporteComponent,
    ComicComponent,
    LibreriaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
