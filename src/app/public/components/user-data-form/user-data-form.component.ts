import {Component, Input, OnInit} from '@angular/core';
import {USER_STATE} from "../../../app.component";

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent implements OnInit{
  typeUser = USER_STATE.EXPERT;
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

  ngOnInit(): void {

  }

  protected readonly USER_STATE = USER_STATE;
}
