import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent {
  public deportes: Array<string>;
  public mensaje!: string;

  constructor() {
    this.deportes = ["Petanca", "Fútbol", "Padel", "Tenis", "Surf", "Curling"];
  }
  //TENDREMOS UN METODO PARA RECIBIR DATOS
  //DESDE EL HIJO
  seleccionarFavorito(event: any): void {
    console.log(event);
    
    this.mensaje="Has seleccionado "+event;
  }


}
