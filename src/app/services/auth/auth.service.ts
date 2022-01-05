import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/watchableStorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedIn = false;

  constructor(private localStorageService: LocalStorageService) {
    localStorageService.watch('token').subscribe((token) => {
      this._loggedIn = !!token;
    });
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  login(token: string) {
    this.localStorageService.set('token', token);
  }

  logout() {
    this.localStorageService.remove('token');
  }
}
