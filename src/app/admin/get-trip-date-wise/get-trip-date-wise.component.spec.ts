import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTripDateWiseComponent } from './get-trip-date-wise.component';

describe('GetTripDateWiseComponent', () => {
  let component: GetTripDateWiseComponent;
  let fixture: ComponentFixture<GetTripDateWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTripDateWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTripDateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
