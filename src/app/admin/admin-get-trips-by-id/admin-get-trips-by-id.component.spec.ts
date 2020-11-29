import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetTripsByIdComponent } from './admin-get-trips-by-id.component';

describe('AdminGetTripsByIdComponent', () => {
  let component: AdminGetTripsByIdComponent;
  let fixture: ComponentFixture<AdminGetTripsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetTripsByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetTripsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
