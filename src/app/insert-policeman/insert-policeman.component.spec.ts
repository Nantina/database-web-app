import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPolicemanComponent } from './insert-policeman.component';

describe('InsertPolicemanComponent', () => {
  let component: InsertPolicemanComponent;
  let fixture: ComponentFixture<InsertPolicemanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertPolicemanComponent]
    });
    fixture = TestBed.createComponent(InsertPolicemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
