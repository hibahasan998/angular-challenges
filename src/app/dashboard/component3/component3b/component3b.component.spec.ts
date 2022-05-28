import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3bComponent } from './component3b.component';

describe('Component3bComponent', () => {
  let component: Component3bComponent;
  let fixture: ComponentFixture<Component3bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component3bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
