import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDailyCardComponent } from './active-daily-card.component';

describe('ActiveDailyCardComponent', () => {
  let component: ActiveDailyCardComponent;
  let fixture: ComponentFixture<ActiveDailyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveDailyCardComponent]
    });
    fixture = TestBed.createComponent(ActiveDailyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
