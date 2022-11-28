import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-password-panel',
  templateUrl: './password-panel.component.html',
  styleUrls: ['./password-panel.component.scss']
})
export class PasswordPanelComponent implements OnInit {

  @Input()
  public userPas: string = ''





  public panelOpenState: boolean = false

  public changePas: boolean = false
  public hide = true;
  public changePasForm!: FormGroup;
  public validator: Array<ValidatorFn> = [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(24),
    Validators.pattern(/(?=.*\d)(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/)
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.changePasForm = this.formBuilder.group({
      currentPass: new FormControl('', this.validator),
      newPass: new FormControl('', this.validator),
      confirmPass: new FormControl('', this.validator),
    });
  }

  public get currentPass(): FormControl {
    return this.changePasForm.get('currentPass') as FormControl
  }
  public get newPass(): FormControl {
    return this.changePasForm.get('newPass') as FormControl
  }
  public get confirmPass(): FormControl {
    return this.changePasForm.get('confirmPass') as FormControl
  }

  protected add(): void {
    
  }
}
