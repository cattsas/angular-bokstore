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
        "editorial":"Kapelusz",
        "precio":1500,
        "imagen":"assets/images/psicoanalista.jpg",
        "cantidad":50,
        "best_seller":true
      },
    {
      "nombre":"Cujo",
      "autor" :"Stephen King",
      "genero":"Terror",
      "editorial":"LB",
      "precio":1100,
      "imagen":"assets/images/cujo.jpg",
      "cantidad":0,
      "best_seller":false
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
