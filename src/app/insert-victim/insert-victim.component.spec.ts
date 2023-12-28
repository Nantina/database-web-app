import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVictimComponent } from './insert-victim.component';

describe('InsertVictimComponent', () => {
  let component: InsertVictimComponent;
  let fixture: ComponentFixture<InsertVictimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertVictimComponent]
    });
    fixture = TestBed.createComponent(InsertVictimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
