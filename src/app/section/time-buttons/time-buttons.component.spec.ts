import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeButtonsComponent } from './time-buttons.component';

describe('TimeButtonsComponent', () => {
  let component: TimeButtonsComponent;
  let fixture: ComponentFixture<TimeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
