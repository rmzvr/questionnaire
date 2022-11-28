import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.scss'],
})
export class RestoreComponent {
  public restoreForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.restoreForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public get email(): FormControl {
    return this.restoreForm.get('email') as FormControl
  }

  public submit(event: Event): void {
    event.preventDefault();

    if (this.restoreForm.invalid) {
      return;
    }

    //! Restore password
  }
}
