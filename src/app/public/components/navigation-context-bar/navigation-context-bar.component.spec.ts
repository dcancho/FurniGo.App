import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationContextBarComponent } from './navigation-context-bar.component';

describe('NavigationContextBarComponent', () => {
  let component: NavigationContextBarComponent;
  let fixture: ComponentFixture<NavigationContextBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationContextBarComponent]
    });
    fixture = TestBed.createComponent(NavigationContextBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
