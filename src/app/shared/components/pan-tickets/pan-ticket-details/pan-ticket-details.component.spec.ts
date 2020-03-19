import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTicketDetailsComponent } from './pan-ticket-details.component';

describe('PanTicketDetailsComponent', () => {
  let component: PanTicketDetailsComponent;
  let fixture: ComponentFixture<PanTicketDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTicketDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
