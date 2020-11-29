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
private _total: number=0;
  
myList: BehaviorSubject<Book[]> = new BehaviorSubject([]);//hace observable a myList
total: BehaviorSubject<number> = new BehaviorSubject(0);
  
constructor() { }
  
addToCart(book: Book) {
    this._total=0;
    if (book.cantidad>book.stock){
      alert("excede disponible");
      book.cantidad=0;
    }
    else {
      if (book.cantidad>0){
        let item: Book = this._myList.find((value1) => value1.nombre == book.nombre);//busca si ya se cargo el elemento al carrito
        if (!item) {
          this._myList.push({ ... book});//clona el objeto
        }
        else {
          item.cantidad+=book.cantidad;      
        }
        
        this._myList.forEach(element => {
          this._total+=element.precio*element.cantidad
        });
        console.log(this._total);
        this.myList.next(this._myList);//equivalente al emmitt de eventos
        this.total.next(this._total);
      }
      else {
        alert("Ingrese cantidad deseada");
      }
    }
  }
}


