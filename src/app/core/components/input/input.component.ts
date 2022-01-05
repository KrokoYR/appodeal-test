import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})
export class InputComponent {
  @Input() label = '';

  inputControl = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.inputControl.hasError('required')) {
      return 'You must enter a value';
    }

    return '';
  }
}
