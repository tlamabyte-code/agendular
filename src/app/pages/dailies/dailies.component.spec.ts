import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyComponent } from './dailies.component';

describe('DailyComponent', () => {
  let component: DailyComponent;
  let fixture: ComponentFixture<DailyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyComponent]
    });
    fixture = TestBed.createComponent(DailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
