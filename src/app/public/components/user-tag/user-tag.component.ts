import { Component } from '@angular/core';

@Component({
  selector: 'app-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.css']
})
export class UserTagComponent {
  @Input() nombreDeUsuario: string="usuario";
  @Input() imagenDePerfil: string="none";
}
