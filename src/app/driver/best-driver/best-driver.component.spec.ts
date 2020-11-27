import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDriverComponent } from './best-driver.component';

describe('BestDriverComponent', () => {
  let component: BestDriverComponent;
  let fixture: ComponentFixture<BestDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
