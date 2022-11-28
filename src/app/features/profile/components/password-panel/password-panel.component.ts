import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-password-panel',
  templateUrl: './password-panel.component.html',
  styleUrls: ['./password-panel.component.scss']
})
export class PasswordPanelComponent {
  @Input()
  public userPas: string = ''

  public currentPass: string = ''
  public newPass: string = ''
  public confirmPass: string = ''

  public panelOpenState: boolean = false

  public changePas: boolean = false
  public hide = true;

  protected curPasFormControl = new FormControl('', [Validators.required,]);
  protected newPasFormControl = new FormControl('', [Validators.required,]);
  protected confirmPasFormControl = new FormControl('', [Validators.required,]);

  protected matcher = new ErrorStateMatcher();


  protected add():void {

    if (!this.curPasFormControl.value || !this.newPasFormControl.value || !this.confirmPasFormControl.value) {
      throw new Error('Change password failed');

    }
    this.currentPass = this.curPasFormControl.value
    this.newPass = this.newPasFormControl.value
    this.confirmPass = this.confirmPasFormControl.value
  }
}
