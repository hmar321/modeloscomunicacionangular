import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

const rutas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listaproductos', component: ListaProductosComponent },
    { path: 'listaproductos/detalles/:producto', component: DetalleProductoComponent, },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);
