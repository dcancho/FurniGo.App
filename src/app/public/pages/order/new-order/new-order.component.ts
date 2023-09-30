import { Component } from '@angular/core';
import {USER_STATE} from "../../../../app.component";

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent {
  typeUser = USER_STATE.EXPERT;

  // protected readonly USER_STATE = USER_STATE;
  protected readonly USER_STATE = USER_STATE;
}
