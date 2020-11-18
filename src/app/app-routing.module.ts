import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookstoreAboutComponent } from './bookstore-about/bookstore-about.component';
import { BookstoreBooksComponent } from './bookstore-books/bookstore-books.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo:'books',
    pathMatch:'full'
  },
  {
    path: 'books', 
    component:BookstoreBooksComponent
  },
  {
    path: 'about', 
    component:BookstoreAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
