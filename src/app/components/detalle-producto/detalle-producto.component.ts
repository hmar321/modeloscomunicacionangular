import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{
  public producto!: Producto;
  constructor(private _route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      if (params['producto']!=null) {
        this.producto=params['producto'];
      }
    });
  }
}
