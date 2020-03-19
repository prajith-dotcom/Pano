import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanAttachmentsComponent } from './pan-attachments.component';

describe('PanAttachmentsComponent', () => {
  let component: PanAttachmentsComponent;
  let fixture: ComponentFixture<PanAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
