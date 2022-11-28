import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public isPasswordHidden: boolean = true;

  public registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24),
        Validators.pattern(/(?=.*\d)(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/),
      ]),
    });
  }

  public get name(): FormControl {
    return this.registerForm.get('name') as FormControl
  }

  public get email(): FormControl {
    return this.registerForm.get('email') as FormControl
  }

  public get password(): FormControl {
    return this.registerForm.get('password') as FormControl
  }

  public submit(event: Event): void {
    event.preventDefault();

    if (this.registerForm.invalid) {
      return;
    }

    //! Register user
  }
}
