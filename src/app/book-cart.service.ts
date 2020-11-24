import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
/**
 * maneja la logica del carrito
 * 
 */

export class BookCartService {
 
private _myList: Book [] = [];
  
myList: BehaviorSubject<Book[]> = new BehaviorSubject([]);//hace observable a myList
  
constructor() { }
  
addToCart(book: Book) {
    let item: Book = this._myList.find((value1) => value1.nombre == book.nombre);//busca si ya se cargo el elemento al carrito
    if (!item) {
      this._myList.push({ ... book});//clona el objeto
    }
    else {
      item.cantidad+=book.cantidad;      
    }
   
    console.table(this._myList);
    this.myList.next(this._myList);//equivalente al emmitt de eventos
    
  }

}
