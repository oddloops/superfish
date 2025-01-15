import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'input-validation',
  imports: [CommonModule],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})

export class InputValidationComponent implements OnInit, OnChanges{
  @Input() control!: AbstractControl;
  @Input() showErrorsWhen: boolean = true;
  @Input() inputType!: string;
  errorMessages: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }

  // Gives the proper error validator message
  validatorMessages(key: string, field: string) {
    switch(key) {
      case 'required':
        return `${field} is required`;
      case 'invalid':
        return `${field} is invalid`;
      default:
        return '';
    }
  }

  checkValidation() {
    const errors = this.control.errors;

    if(!errors) {
      this.errorMessages = [];
      return;
    }

    const errorKeys: string[] = Object.keys(errors);
    this.errorMessages = errorKeys.map(key => this.validatorMessages(key, this.inputType));
  }
}
