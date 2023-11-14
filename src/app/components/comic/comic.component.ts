import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Output() modificar: EventEmitter<any> = new EventEmitter();
  @Output() eliminar: EventEmitter<any> = new EventEmitter();
  @Output() favorito: EventEmitter<any> = new EventEmitter();

  modificarComic() {
    this.modificar.emit(this.comic);
  }
  eliminarComic() {
    this.eliminar.emit(this.comic);
  }
  comicFavorito() {
    this.favorito.emit(this.comic);
  }
}
