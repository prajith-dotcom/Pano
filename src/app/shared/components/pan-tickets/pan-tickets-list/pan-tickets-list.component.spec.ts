import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTicketsListComponent } from './pan-tickets-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PanTicketsListComponent', () => {
  let component: PanTicketsListComponent;
  let fixture: ComponentFixture<PanTicketsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTicketsListComponent ],
      schemas:  [ NO_ERRORS_SCHEMA ] ,      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTicketsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
