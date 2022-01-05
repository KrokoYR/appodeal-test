import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appodeal-test';
  loggedIn: boolean;

  constructor(public auth: AuthService) {
    this.loggedIn = auth.loggedIn;
  }
}
