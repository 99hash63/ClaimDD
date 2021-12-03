import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewQuantumComponent } from './preview-quantum.component';

describe('PreviewQuantumComponent', () => {
  let component: PreviewQuantumComponent;
  let fixture: ComponentFixture<PreviewQuantumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewQuantumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewQuantumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
