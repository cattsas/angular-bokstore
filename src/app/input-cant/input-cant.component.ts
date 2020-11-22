import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book-list/Book';
import { BookstoreAboutComponent } from '../bookstore-about/bookstore-about.component';

@Component({
  selector: 'app-input-cant',
  templateUrl: './input-cant.component.html',
  styleUrls: ['./input-cant.component.scss']
})
export class InputCantComponent implements OnInit {

  constructor() { }

  @Input()
  cant: number ;

  @Input()
  max: number ;

  @Output ()
  cantChange: EventEmitter<number>=new EventEmitter<number>();

  @Output ()
  maxReached: EventEmitter<string>=new EventEmitter<string>();

  ngOnInit(): void {
  }
  sumStock(): void {
    if (this.cant<this.max){
      this.cant++;
      this.cantChange.emit(this.cant);
    }
    else
    this.maxReached.emit("Se alcanzó el máximo disponible");
  }

  decStock(): void {
    if (this.cant>0){
     this.cant--;
     this.cantChange.emit(this.cant);
    }
  }

  modCantidad (event,book: Book): void{
    if (event.key<='0' || event.key>='9') {
      
      console.log(event.key);
      this.cantChange.emit(this.cant);
    };
  }
}
