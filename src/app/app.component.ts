import { Component } from '@angular/core';

export enum USER_STATE {
  NONE,
  CLIENT,
  EXPERT
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FurniGo';
  userState: USER_STATE = USER_STATE.CLIENT;
}
