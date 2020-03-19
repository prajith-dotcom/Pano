import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTicketSubmittedModalComponent } from './pan-ticket-submitted-modal.component';

describe('PanTicketSubmittedModalComponent', () => {
  let component: PanTicketSubmittedModalComponent;
  let fixture: ComponentFixture<PanTicketSubmittedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTicketSubmittedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTicketSubmittedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
