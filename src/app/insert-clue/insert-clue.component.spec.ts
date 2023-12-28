import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertClueComponent } from './insert-clue.component';

describe('InsertClueComponent', () => {
  let component: InsertClueComponent;
  let fixture: ComponentFixture<InsertClueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertClueComponent]
    });
    fixture = TestBed.createComponent(InsertClueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
