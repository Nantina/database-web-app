import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertWitnessComponent } from './insert-witness.component';

describe('InsertWitnessComponent', () => {
  let component: InsertWitnessComponent;
  let fixture: ComponentFixture<InsertWitnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertWitnessComponent]
    });
    fixture = TestBed.createComponent(InsertWitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
