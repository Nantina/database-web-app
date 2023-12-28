import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSuspectComponent } from './insert-suspect.component';

describe('InsertSuspectComponent', () => {
  let component: InsertSuspectComponent;
  let fixture: ComponentFixture<InsertSuspectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertSuspectComponent]
    });
    fixture = TestBed.createComponent(InsertSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
