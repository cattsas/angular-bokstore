import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookChartComponent } from './book-chart/book-chart.component';
import { FormsModule } from '@angular/forms';
import { BookstoreAboutComponent } from './bookstore-about/bookstore-about.component';
import { BookstoreBooksComponent } from './bookstore-books/bookstore-books.component';
import { BookstoreChartComponent } from './bookstore-chart/bookstore-chart.component';
import { InputCantComponent } from './input-cant/input-cant.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookChartComponent,
    BookstoreAboutComponent,
    BookstoreBooksComponent,
    BookstoreChartComponent,
    InputCantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
