import { Component } from '@angular/core';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent {
  typeUser = 'cliMRDent';
  client = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
  }
  expert = {
    name: '',
    lastname: '',
    email: '',
    comercialName: '',
    ruc: '',
    phone: '',
    phone2: '',
    address: '',
  }
}
