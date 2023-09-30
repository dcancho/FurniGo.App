import { Component } from '@angular/core';
import {USER_STATE} from "../../../../app.component";

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent {
  typeUser: USER_STATE = USER_STATE.CLIENT;

  protected readonly USER_STATE = USER_STATE;
}
