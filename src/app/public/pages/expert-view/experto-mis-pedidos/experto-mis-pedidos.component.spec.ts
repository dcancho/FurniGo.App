import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertoMisPedidosComponent } from './experto-mis-pedidos.component';

describe('ExpertoMisPedidosComponent', () => {
  let component: ExpertoMisPedidosComponent;
  let fixture: ComponentFixture<ExpertoMisPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertoMisPedidosComponent]
    });
    fixture = TestBed.createComponent(ExpertoMisPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
