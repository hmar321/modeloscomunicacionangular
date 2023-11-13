import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  public productos!: Array<Producto>;

  constructor(private _router: Router) {
    this.productos = [
      new Producto(
        "Nike Air Jordan",
        "https://i.ebayimg.com/images/g/lEsAAOSwBJpc1MAN/s-l300.jpg",
        150
      ),
      new Producto(
        "New Balance 1530",
        "https://cdn.webshopapp.com/shops/164432/files/292835943/new-balance-m1530kgl-olive-grey-pink-made-in-uk.jpg",
        140
      ),
      new Producto(
        "J-Hayber Olimpo",
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        60
      ),
      new Producto(
        "Vans",
        "https://media.vogue.es/photos/5cc75028fdc822a6611ff5bb/master/w_2700,c_limit/voguees_moda_tendencias_250218163.jpg",
        75
      )
    ];
  }

  detallesProducto(producto: Producto): void {
    this._router.navigate(['detalles']);
  }
}
