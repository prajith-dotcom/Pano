import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTakeActionComponent } from './pan-take-action.component';

describe('PanTakeActionComponent', () => {
  let component: PanTakeActionComponent;
  let fixture: ComponentFixture<PanTakeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTakeActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTakeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
