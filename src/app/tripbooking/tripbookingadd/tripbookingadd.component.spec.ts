import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripbookingaddComponent } from './tripbookingadd.component';

describe('TripbookingaddComponent', () => {
  let component: TripbookingaddComponent;
  let fixture: ComponentFixture<TripbookingaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripbookingaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripbookingaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
