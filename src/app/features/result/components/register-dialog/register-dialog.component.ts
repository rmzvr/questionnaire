import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss'],
})
export class RegisterDialogComponent {
  public isPasswordHidden: boolean = true;

  public registerForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<RegisterDialogComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24),
        Validators.pattern(/(?=.*\d)(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/),
      ]),
    });
  }

  public get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  public submit(): void {
    this.dialogRef.close(this.registerForm.value.password);
  }
}
