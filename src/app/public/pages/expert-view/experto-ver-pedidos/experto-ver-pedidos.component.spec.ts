import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertoVerPedidosComponent } from './experto-ver-pedidos.component';

describe('ExpertoVerPedidosComponent', () => {
  let component: ExpertoVerPedidosComponent;
  let fixture: ComponentFixture<ExpertoVerPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertoVerPedidosComponent]
    });
    fixture = TestBed.createComponent(ExpertoVerPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
