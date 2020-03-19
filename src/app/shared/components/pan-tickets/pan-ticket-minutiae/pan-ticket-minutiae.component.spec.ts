import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTicketMinutiaeComponent } from './pan-ticket-minutiae.component';

describe('PanTicketMinutiaeComponent', () => {
  let component: PanTicketMinutiaeComponent;
  let fixture: ComponentFixture<PanTicketMinutiaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTicketMinutiaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTicketMinutiaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
