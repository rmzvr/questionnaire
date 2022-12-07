import { SigninService } from './services/signin.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public isPasswordHidden: boolean = true;

  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24),
        Validators.pattern(/(?=.*\d)(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/),
      ]),
    });
  }

  public get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  public get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  public submit(event: Event): void {
    event.preventDefault();

    this.signinService
      .login({
        username: this.loginForm.value['email'],
        password: this.loginForm.value['password'],
      })
      .subscribe((res) => {
        localStorage.setItem('token', res.jwtAccess);

        this.router.navigate(['/profile']);
      });
  }
}
