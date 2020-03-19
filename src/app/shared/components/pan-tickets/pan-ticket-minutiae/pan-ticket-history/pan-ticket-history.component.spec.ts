import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTicketHistoryComponent } from './pan-ticket-history.component';

describe('PanTicketHistoryComponent', () => {
  let component: PanTicketHistoryComponent;
  let fixture: ComponentFixture<PanTicketHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTicketHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTicketHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
