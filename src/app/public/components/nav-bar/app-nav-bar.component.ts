import { Component, Input } from '@angular/core';
import { USER_STATE } from 'src/app/app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.css']
})
export class AppNavBarComponent {
  button1Text = 'Mis pedidos';
  button1Link = '/mis-pedidos';
  button2Text = 'Nuevo pedido';
  button2Link = '/nuevo-pedido';
  
  @Input() userState = USER_STATE.EXPERT;
  
  ngOnInit(){
    switch(this.userState){
      case USER_STATE.CLIENT: {
        this.button1Text = "Mis Pedidos"
        this.button1Link = "/client/order/list"
        this.button2Text = "Nuevo Pedido"
        this.button2Link = "/client/order/new"
        break;
      }
      case USER_STATE.EXPERT: {
        this.button1Text = "Mis Pedidos"
        this.button1Link = "/expert/order/list"
        this.button2Text = "Buscar Pedidos"
        this.button2Link = "/expert/order/search"
      }
    }
  }
}