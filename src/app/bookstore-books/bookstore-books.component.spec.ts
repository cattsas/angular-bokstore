import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreBooksComponent } from './bookstore-books.component';

describe('BookstoreBooksComponent', () => {
  let component: BookstoreBooksComponent;
  let fixture: ComponentFixture<BookstoreBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
