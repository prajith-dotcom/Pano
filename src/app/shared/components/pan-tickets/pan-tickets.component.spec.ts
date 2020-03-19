import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTicketsComponent } from './pan-tickets.component';

describe('PanTicketsComponent', () => {
  let component: PanTicketsComponent;
  let fixture: ComponentFixture<PanTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
