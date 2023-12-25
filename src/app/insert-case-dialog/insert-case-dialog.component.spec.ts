import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCaseDialogComponent } from './insert-case-dialog.component';

describe('InsertCaseDialogComponent', () => {
  let component: InsertCaseDialogComponent;
  let fixture: ComponentFixture<InsertCaseDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertCaseDialogComponent]
    });
    fixture = TestBed.createComponent(InsertCaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
