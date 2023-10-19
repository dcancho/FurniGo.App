import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeViewportComponent } from './three-viewport.component';

describe('ThreeViewportComponent', () => {
  let component: ThreeViewportComponent;
  let fixture: ComponentFixture<ThreeViewportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeViewportComponent]
    });
    fixture = TestBed.createComponent(ThreeViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
