import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanProcessDataComponent } from './pan-process-data.component';

describe('PanProcessDataComponent', () => {
  let component: PanProcessDataComponent;
  let fixture: ComponentFixture<PanProcessDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanProcessDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanProcessDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
