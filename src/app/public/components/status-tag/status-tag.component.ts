import { Component, ViewChild } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-status-tag',
  templateUrl: './status-tag.component.html',
  styleUrls: ['./status-tag.component.css']
})
export class StatusTagComponent {
  @Input() estado: string;
  textoEstado: string = '';
  private circleItem = document.querySelector('.circle');
  ngOnInit(): void {

    this.actualizarTextoEstado();
  }
  constructor() {
    this.estado = '';
  }

  private actualizarTextoEstado() {
    switch (this.estado) {
      case 'En fabricacion':
        this.textoEstado = 'En fabricación';
        break;
      case 'en cola':
        this.textoEstado = 'En cola';
        break;
      case 'detenido':
        this.textoEstado = 'Detenido';
        break;
      case 'listo':
        this.textoEstado = 'Listo';
        break;
      default:
        this.textoEstado = 'Desconocido';
        break;
    }
  }
}
