import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertoPedidoComponent } from './experto-pedido.component';

describe('ExpertoPedidoComponent', () => {
  let component: ExpertoPedidoComponent;
  let fixture: ComponentFixture<ExpertoPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertoPedidoComponent]
    });
    fixture = TestBed.createComponent(ExpertoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
