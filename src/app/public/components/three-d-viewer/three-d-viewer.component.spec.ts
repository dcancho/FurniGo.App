import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDViewerComponent } from './three-d-viewer.component';

describe('ThreeDViewerComponent', () => {
  let component: ThreeDViewerComponent;
  let fixture: ComponentFixture<ThreeDViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeDViewerComponent]
    });
    fixture = TestBed.createComponent(ThreeDViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
