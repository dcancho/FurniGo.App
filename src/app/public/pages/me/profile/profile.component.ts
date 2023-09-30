import { Component } from '@angular/core';
import {USER_STATE} from "../../../../app.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    protected readonly USER_STATE = USER_STATE;
}
