import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreChartComponent } from './bookstore-chart.component';

describe('BookstoreChartComponent', () => {
  let component: BookstoreChartComponent;
  let fixture: ComponentFixture<BookstoreChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
