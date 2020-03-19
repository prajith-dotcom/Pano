import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanTasksListComponent } from './pan-tasks-list.component';

describe('PanTasksListComponent', () => {
  let component: PanTasksListComponent;
  let fixture: ComponentFixture<PanTasksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanTasksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanTasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
