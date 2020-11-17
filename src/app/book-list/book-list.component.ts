import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] =[ 
      {
        "nombre":"El Psicoanalista",
        "autor" :"John Katzenbach",
        "genero":"Thriller",
        "precio":1500,
        "imagen":"assets/images/psicoanalista.jpg",
        "stock":50,
        "best_seller":true,
        "cantidad":0
      },
    {
      "nombre":"Cujo",
      "autor" :"Stephen King",
      "genero":"Terror",
      "precio":1100,
      "imagen":"assets/images/cujo.jpg",
      "stock":0,
      "best_seller":false,
      "cantidad":0
  }]
  constructor() { }

  ngOnInit(): void {
  }

  sumStock(book: Book): void {
    if (book.cantidad<book.stock){
     book.cantidad++;
    }
  }

  decStock(book: Book): void {
    if (book.cantidad>0){
     book.cantidad--;
    }
  }

  modCantidad (event,book: Book): void{
    if (event.key<='0' || event.key>='9') {
      console.log ("hola");
    };
  }
}
