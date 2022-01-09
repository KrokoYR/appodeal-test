import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/watchableStorage.service';
import { Store } from '@ngrx/store';
import { loginAction } from '../../shared/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private localStorageService: LocalStorageService,
    private store: Store
  ) {
    localStorageService.watch('token').subscribe(() => {
      this.store.dispatch(loginAction());
    });
  }

  checkLogin() {
    const token = this.localStorageService.get('token');
    if (token) {
      this.store.dispatch(loginAction());
    }
  }

  login(token: string) {
    this.localStorageService.set('token', JSON.stringify(token));
  }

  logout() {
    this.localStorageService.remove('token');
  }
}
