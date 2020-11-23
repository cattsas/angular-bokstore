import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
export class BookCartService {

  private _myList: Book [] = [];
  
  myList: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  
  constructor() { }
  
  addToCart(book: Book) {
    let item: Book = this._myList.find((value1) => value1.nombre == book.nombre);
    if (!item) {
      this._myList.push({ ... book});
    }
    else {
      item.cantidad+=book.cantidad;      
    }
   
    console.table(this._myList);
    this.myList.next(this._myList);//equivalente al emmit de eventos
    
  }

}
