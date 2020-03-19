import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTransactionsComponent } from './pan-transactions.component';

describe('PanTransactionsComponent', () => {
  let component: PanTransactionsComponent;
  let fixture: ComponentFixture<PanTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
