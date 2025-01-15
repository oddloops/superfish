import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from "../input-container/input-container.component";
import { InputValidationComponent } from '../input-validation/input-validation.component';

@Component({
  selector: 'text-input',
  imports: [ReactiveFormsModule, InputContainerComponent, InputValidationComponent],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent {
  @Input() control!: AbstractControl;
  @Input() showErrorWhen: boolean = true;
  @Input() type: 'Text' | 'Password' | 'Email' = 'Text';

  get formControl(): FormControl {
    return this.control as FormControl;
  }
}
