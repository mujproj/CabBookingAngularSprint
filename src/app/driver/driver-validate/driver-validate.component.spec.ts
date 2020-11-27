import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverValidateComponent } from './driver-validate.component';

describe('DriverValidateComponent', () => {
  let component: DriverValidateComponent;
  let fixture: ComponentFixture<DriverValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
