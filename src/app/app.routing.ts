import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { PadrecochesComponent } from './components/padrecoches/padrecoches.component';
import { PadredeportesComponent } from './components/padredeportes/padredeportes.component';
import { LibreriaComponent } from './components/libreria/libreria.component';

const rutas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listaproductos', component: ListaProductosComponent },
    { path: 'listaproductos/detalles/:producto', component: DetalleProductoComponent, },
    { path: 'padrecoches', component: PadrecochesComponent, },
    { path: 'padredeportes', component: PadredeportesComponent, },
    { path: 'libreria', component: LibreriaComponent, },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);
