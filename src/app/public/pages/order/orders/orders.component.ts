import { Component } from '@angular/core';
import {USER_STATE} from "../../../../app.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  typeUser = USER_STATE.CLIENT;
  protected readonly USER_STATE = USER_STATE;
}
