import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalExaminerComponent } from './medical-examiner.component';

describe('MedicalExaminerComponent', () => {
  let component: MedicalExaminerComponent;
  let fixture: ComponentFixture<MedicalExaminerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalExaminerComponent]
    });
    fixture = TestBed.createComponent(MedicalExaminerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
