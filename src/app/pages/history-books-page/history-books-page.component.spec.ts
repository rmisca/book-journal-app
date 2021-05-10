import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBooksPageComponent } from './history-books-page.component';

describe('HistoryBooksPageComponent', () => {
  let component: HistoryBooksPageComponent;
  let fixture: ComponentFixture<HistoryBooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBooksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
