import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from '../../shared/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedIn$ = this.store.select(selectIsLoggedIn);

  constructor(private store: Store) {}

  title = 'appodeal-test';
}
