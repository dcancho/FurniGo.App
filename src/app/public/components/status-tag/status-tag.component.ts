import { Component } from '@angular/core';

@Component({
  selector: 'app-status-tag',
  templateUrl: './status-tag.component.html',
  styleUrls: ['./status-tag.component.css']
})
export class StatusTagComponent {
  @Input() estado: string = 'listo';
  textoEstado: string = '';

  ngOnInit(): void {

    this.actualizarTextoEstado();
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
