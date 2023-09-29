import { Component } from '@angular/core';


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
  imagePath = 'https://picsum.photos/200/300';
}