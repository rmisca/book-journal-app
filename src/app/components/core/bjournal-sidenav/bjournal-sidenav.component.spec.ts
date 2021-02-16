import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BjournalSidenavComponent } from './bjournal-sidenav.component';

describe('BjournalSidenavComponent', () => {
  let component: BjournalSidenavComponent;
  let fixture: ComponentFixture<BjournalSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BjournalSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BjournalSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
