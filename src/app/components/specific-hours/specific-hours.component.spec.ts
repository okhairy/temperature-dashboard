import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificHoursComponent } from './specific-hours.component';

describe('SpecificHoursComponent', () => {
  let component: SpecificHoursComponent;
  let fixture: ComponentFixture<SpecificHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificHoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
