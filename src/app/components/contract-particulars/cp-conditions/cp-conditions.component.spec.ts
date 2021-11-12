import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpConditionsComponent } from './cp-conditions.component';

describe('CpConditionsComponent', () => {
  let component: CpConditionsComponent;
  let fixture: ComponentFixture<CpConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
