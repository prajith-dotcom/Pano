import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanKeywordsComponent } from './pan-keywords.component';

describe('PanKeywordsComponent', () => {
  let component: PanKeywordsComponent;
  let fixture: ComponentFixture<PanKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
