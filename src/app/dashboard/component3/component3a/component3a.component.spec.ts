import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3aComponent } from './component3a.component';

describe('Component3aComponent', () => {
  let component: Component3aComponent;
  let fixture: ComponentFixture<Component3aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component3aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
