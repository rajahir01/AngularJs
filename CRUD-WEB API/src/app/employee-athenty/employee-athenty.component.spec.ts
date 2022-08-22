import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAthentyComponent } from './employee-athenty.component';

describe('EmployeeAthentyComponent', () => {
  let component: EmployeeAthentyComponent;
  let fixture: ComponentFixture<EmployeeAthentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAthentyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAthentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
