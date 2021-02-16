import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BjournalContentComponent } from './bjournal-content.component';

describe('BjournalContentComponent', () => {
  let component: BjournalContentComponent;
  let fixture: ComponentFixture<BjournalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BjournalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BjournalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
