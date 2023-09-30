import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMisPedidosComponent } from './cliente-mis-pedidos.component';

describe('ClienteMisPedidosComponent', () => {
  let component: ClienteMisPedidosComponent;
  let fixture: ComponentFixture<ClienteMisPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteMisPedidosComponent]
    });
    fixture = TestBed.createComponent(ClienteMisPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
