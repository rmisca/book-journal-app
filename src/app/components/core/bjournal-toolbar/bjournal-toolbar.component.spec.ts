import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BjournalToolbarComponent } from './bjournal-toolbar.component';

describe('BjournalToolbarComponent', () => {
  let component: BjournalToolbarComponent;
  let fixture: ComponentFixture<BjournalToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BjournalToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BjournalToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
