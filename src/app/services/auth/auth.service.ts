import {Injectable, OnDestroy} from '@angular/core';
import { localStorageService } from 'src/app/services/localStorage/localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy{
  constructor() {
    this._loggedIn = !!localStorageService.get('token');
    window.addEventListener('storage', this.localStorageUpdated)
  }

  ngOnDestroy() {
    window.removeEventListener('storage', this.localStorageUpdated)
  }

  private localStorageUpdated() {
    this._loggedIn = !!localStorageService.get('token');
  }

  private _loggedIn = false;

  get loggedIn() {
    return this._loggedIn;
  }

  logout() {
    localStorageService.removeItem('token');
    this._loggedIn = false;
  }
}
