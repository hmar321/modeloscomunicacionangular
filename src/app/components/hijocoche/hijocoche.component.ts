import { Component, Input } from '@angular/core';
import { Coche } from 'src/app/models/Coche';

@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css']
})
export class HijococheComponent {
  @Input() car!:Coche;
  public mensaje!: string;

  constructor() {
   //CUANDO RECIBIMOS ELEMENTOS INPUT, NO PODEMOS 
   //UTILIZARLOS DENTRO DEL CONSTRUCTOR
  }

  //TENDRAMOS UN METODO QUE DEVOLVERA TRUE O FALSE
  //SI EL COCHES ESTA APAGADO O ENCENDIDO
  comprobarEstado(): boolean {
    if (this.car.estado === false) {
      this.mensaje = "El coche está apagado";
      this.car.velocidad = 0;
      return false;
    } else {
      this.mensaje = "El coche está encendido";
      return true;
    }
  }

  encenderCoche(): void {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void {
    if (this.comprobarEstado() === false) {
      alert("¿Dónde vas?, el coche está apagado");
    } else {
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
    }
  }
}
