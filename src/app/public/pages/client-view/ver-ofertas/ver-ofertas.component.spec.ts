import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerOfertasComponent } from './ver-ofertas.component';

describe('VerOfertasComponent', () => {
  let component: VerOfertasComponent;
  let fixture: ComponentFixture<VerOfertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerOfertasComponent]
    });
    fixture = TestBed.createComponent(VerOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
