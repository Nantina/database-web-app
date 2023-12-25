import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicemanComponent } from './policeman.component';

describe('PolicemanComponent', () => {
  let component: PolicemanComponent;
  let fixture: ComponentFixture<PolicemanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolicemanComponent]
    });
    fixture = TestBed.createComponent(PolicemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
