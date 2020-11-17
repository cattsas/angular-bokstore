import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  book = {
        "nombre":"El Psicoanalista",
        "autor" :"John Katzenbach",
        "genero":"Thriller",
        "editorial":"Kapelusz",
        "precio":"1500",
        "imagen":"assets/images/psicoanalista.jpg",
        "cantidad":50
  }
  constructor() { }

  ngOnInit(): void {
  }

}
