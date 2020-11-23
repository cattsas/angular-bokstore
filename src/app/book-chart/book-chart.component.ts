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
  
  constructor (private cart: BookCartService) {
    this.myList$ = cart.myList.asObservable();
    
   }

  ngOnInit(): void {
  }

}
