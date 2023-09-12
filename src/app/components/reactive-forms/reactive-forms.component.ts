import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  constructor(private formBuilder: FormBuilder) { }

  public registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(3)])],
    lastName: ['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(3)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });

  public submitForm() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}
