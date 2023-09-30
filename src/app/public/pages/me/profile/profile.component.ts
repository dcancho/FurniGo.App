import {Component, Input} from '@angular/core';
import {USER_STATE} from "../../../../app.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    @Input() userState = USER_STATE.CLIENT;
}
