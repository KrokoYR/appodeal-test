import { Component, OnInit } from '@angular/core';
import {localStorageService} from "../../services/localStorage/localStorage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  private _tokenValue = '';
  handleTokenValueChange = (value: any) => {
    console.log('value', value);
  }

  handleSubmit() {
    localStorageService.set('token', this._tokenValue);
  }
}
