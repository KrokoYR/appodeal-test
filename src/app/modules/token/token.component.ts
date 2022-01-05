import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// services
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent {
  constructor(private authService: AuthService) {
    this.authService = authService;
  }

  form = new FormGroup({
    token: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    const { token } = this.form.value;
    if (token) {
      this.authService.login(this.form.value.token);
    } else {
      this.authService.logout();
    }
  }
}
