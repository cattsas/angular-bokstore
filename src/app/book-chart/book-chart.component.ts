import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-book-chart',
  templateUrl: './book-chart.component.html',
  styleUrls: ['./book-chart.component.scss']
})
export class BookChartComponent implements OnInit {

  myList$: Observable<Book[]>;
  total$: Observable<number>;
  
  constructor (private cart: BookCartService, private suma: BookCartService) {
    this.myList$ = cart.myList.asObservable();
    this.total$ = suma.total.asObservable();
    
   
    
   }

  ngOnInit(): void {
  }

}
