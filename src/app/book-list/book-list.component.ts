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

  maxReached (msg: string){
    alert(msg);
  }
}
