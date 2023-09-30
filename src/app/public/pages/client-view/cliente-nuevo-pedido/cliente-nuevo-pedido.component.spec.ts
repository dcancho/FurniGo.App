import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteNuevoPedidoComponent } from './cliente-nuevo-pedido.component';

describe('ClienteNuevoPedidoComponent', () => {
  let component: ClienteNuevoPedidoComponent;
  let fixture: ComponentFixture<ClienteNuevoPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteNuevoPedidoComponent]
    });
    fixture = TestBed.createComponent(ClienteNuevoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
