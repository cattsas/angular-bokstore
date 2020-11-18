import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreAboutComponent } from './bookstore-about.component';

describe('BookstoreAboutComponent', () => {
  let component: BookstoreAboutComponent;
  let fixture: ComponentFixture<BookstoreAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
