import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTicketActionsComponent } from './pan-ticket-actions.component';

describe('PanTicketActionsComponent', () => {
  let component: PanTicketActionsComponent;
  let fixture: ComponentFixture<PanTicketActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTicketActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTicketActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
