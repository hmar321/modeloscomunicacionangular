import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrls: ['./hijodeporte.component.css']
})
export class HijodeporteComponent {
  @Input() deporte!: string;
  //DEBEMOS DECLARAR EL METODO QUE RECIBIMOS DESDE EL PARENT
  @Output() favorito: EventEmitter<any> = new EventEmitter();
  //CREAMOS UN METODO EN EL COMPONENTE HIJO PARA
  //PODER REALIZAR LA LLAMADA EN EL COMPONENTE PADRE
  enviarFavorito(): void {
    //ESTE METODO LLAMARA AL PADRE
    this.favorito.emit(this.deporte);
  }
}
