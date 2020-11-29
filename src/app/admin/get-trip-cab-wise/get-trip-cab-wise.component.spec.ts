import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTripCabWiseComponent } from './get-trip-cab-wise.component';

describe('GetTripCabWiseComponent', () => {
  let component: GetTripCabWiseComponent;
  let fixture: ComponentFixture<GetTripCabWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTripCabWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTripCabWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
