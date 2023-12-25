import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClueComponent } from './clue.component';

describe('ClueComponent', () => {
  let component: ClueComponent;
  let fixture: ComponentFixture<ClueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClueComponent]
    });
    fixture = TestBed.createComponent(ClueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
