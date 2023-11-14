import { Component, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent {
  @ViewChild("cajatitulo") cajatitulo!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion!: ElementRef;
  @ViewChild("cajauptitulo") cajauptitulo!: ElementRef;
  @ViewChild("cajaupimagen") cajaupimagen!: ElementRef;
  @ViewChild("cajaupdescripcion") cajaupdescripcion!: ElementRef;
  public comics: Array<Comic>;
  public mensaje!: string;
  public comic!: Comic;


  constructor() {
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
        "Yo soy Groot"
      ),
      new Comic(
        "Avengers",
        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
        "Los Vengadores"
      ),
      new Comic(
        "Spawn",
        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
        "Todd MacFarlane"
      )
    ];
  }

  crearComic(): void {
    var title = this.cajatitulo.nativeElement.value;
    var img = this.cajaimagen.nativeElement.value;
    var desc = this.cajadescripcion.nativeElement.value;
    var comic = new Comic(title, img, desc);
    this.comics.push(comic);
  }

  eliminarComic(event: any): void {
    var indice = this.comics.indexOf(event);
    this.comics.splice(indice, 1);
  }
  comicFavorito(event: any): void {
    this.mensaje = "Has seleccionado " + event.titulo;
  }
  actualizarComic(): void {
    var title = this.cajauptitulo.nativeElement.value;
    var img = this.cajaupimagen.nativeElement.value;
    var desc = this.cajaupdescripcion.nativeElement.value;
    this.comic.titulo = title;
    this.comic.imagen = img;
    this.comic.descripcion = desc;
  }

  modificarComic(event: any): void {
    console.log(event);
    this.cajauptitulo.nativeElement.value=event.titulo;
    this.cajaupimagen.nativeElement.value=event.imagen;
    this.cajaupdescripcion.nativeElement.value=event.descripcion;
    this.comic = event;
  }
}
