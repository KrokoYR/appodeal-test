import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// services
import { AuthService } from '@services/auth/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';

class TokenErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  form!: FormGroup;
  token!: FormControl;
  matcher = new TokenErrorStateMatcher();

  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit() {
    this._createFormControls();
    this._createForm();
  }

  private _createFormControls() {
    this.token = new FormControl(null, Validators.required);
  }

  private _createForm() {
    this.form = new FormGroup({
      token: this.token
    });
  }

  get f() {
    return this.form.controls;
  }

  get hasError() {
    return this.token.errors && (this.token.touched || this.token.dirty);
  }

  get isEmptyForm() {
    return !this.form.dirty && !this.form.touched;
  }

  submit() {
    if (this.form.valid) {
      const { token } = this.form.value;

      this.authService.login(token);
      this.form.reset();
    }
  }
}
