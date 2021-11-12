import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpAmendmentComponent } from './cp-amendment.component';

describe('CpAmendmentComponent', () => {
  let component: CpAmendmentComponent;
  let fixture: ComponentFixture<CpAmendmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpAmendmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpAmendmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
