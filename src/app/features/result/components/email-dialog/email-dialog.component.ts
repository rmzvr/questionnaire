import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.scss'],
})
export class EmailDialogComponent {
  public emailForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EmailDialogComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public get email(): FormControl {
    return this.emailForm.get('email') as FormControl;
  }

  public submit(): void {
    this.dialogRef.close(this.emailForm.value.email);
  }
}
