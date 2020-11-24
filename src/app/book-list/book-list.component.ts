import { Component, OnInit } from '@angular/core';
import { BookCartService } from '../book-cart.service';
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
        "stock":5,
        "best_seller":true,
        "cantidad":0
      },
    {
      "nombre":"Cujo",
      "autor" :"Stephen King",
      "genero":"Terror",
      "precio":1100,
      "imagen":"assets/images/cujo.jpg",
      "stock":15,
      "best_seller":false,
      "cantidad":0
  }];
 
  

  constructor(private cart: BookCartService) { 
  
  }

  ngOnInit(): void {
  }

  addToCart(book): void{
    this.cart.addToCart(book);
    book.stock-=book.cantidad;
    book.cantidad=0;
    
  }

  maxReached (msg: string){
    alert(msg);
  }
}
