import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMiPedidoComponent } from './cliente-mi-pedido.component';

describe('ClienteMiPedidoComponent', () => {
  let component: ClienteMiPedidoComponent;
  let fixture: ComponentFixture<ClienteMiPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteMiPedidoComponent]
    });
    fixture = TestBed.createComponent(ClienteMiPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
