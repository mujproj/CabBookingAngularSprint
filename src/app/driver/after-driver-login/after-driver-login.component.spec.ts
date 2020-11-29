import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterDriverLoginComponent } from './after-driver-login.component';

describe('AfterDriverLoginComponent', () => {
  let component: AfterDriverLoginComponent;
  let fixture: ComponentFixture<AfterDriverLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterDriverLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterDriverLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
