import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTripsCustomerWiseComponent } from './get-trips-customer-wise.component';

describe('GetTripsCustomerWiseComponent', () => {
  let component: GetTripsCustomerWiseComponent;
  let fixture: ComponentFixture<GetTripsCustomerWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTripsCustomerWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTripsCustomerWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
