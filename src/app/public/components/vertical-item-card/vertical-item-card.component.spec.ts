import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalItemCardComponent } from './vertical-item-card.component';

describe('VerticalItemCardComponent', () => {
  let component: VerticalItemCardComponent;
  let fixture: ComponentFixture<VerticalItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalItemCardComponent]
    });
    fixture = TestBed.createComponent(VerticalItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
