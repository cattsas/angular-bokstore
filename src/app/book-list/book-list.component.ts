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
        "precio":1500,
        "imagen":"assets/images/psicoanalista.jpg",
        "stock":5,
        "best_seller":true,
        "cantidad":0
      },
      {
        "nombre":"La guerra invisible",
        "autor" :"Marcelo Larraquy",
        "precio":1200,
        "imagen":"assets/images/guerra invisible.jpg",
        "stock":12,
        "best_seller":false,
        "cantidad":0
      },
      {
        "nombre":"Los guardianes",
        "autor" :"John Grisham",
        "precio":1300,
        "imagen":"assets/images/los guardianes.jpg",
        "stock":12,
        "best_seller":true,
        "cantidad":0
      },
      {
        "nombre":"Lo mucho que te amé",
        "autor" :"Eduardo Sacheri",
        "precio":1000,
        "imagen":"assets/images/sacheri.jpg",
        "stock":25,
        "best_seller":false,
        "cantidad":0
      },
      {
        "nombre":"Línea de fuego",
        "autor" :"Arturo Perez-Reverte",
        "precio":1700,
        "imagen":"assets/images/reverte.jpg",
        "stock":17,
        "best_seller":true,
        "cantidad":0
      },
    {
      "nombre":"Cujo",
      "autor" :"Stephen King",
      "precio":1100,
      "imagen":"assets/images/cujo.jpg",
      "stock":15,
      "best_seller":true,
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
