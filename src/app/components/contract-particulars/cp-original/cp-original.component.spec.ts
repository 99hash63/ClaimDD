import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpOriginalComponent } from './cp-original.component';

describe('CpOriginalComponent', () => {
  let component: CpOriginalComponent;
  let fixture: ComponentFixture<CpOriginalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpOriginalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
