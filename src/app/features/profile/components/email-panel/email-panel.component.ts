import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-email-panel',
  templateUrl: './email-panel.component.html',
  styleUrls: ['./email-panel.component.scss']
})
export class EmailPanelComponent {
  @Input()
  userEmail:string = ''

  public panelOpenState: boolean = false
  public changeEmail: boolean = false
  public email: string = ''
  public changedEmail: string = ''

  ngOnInit() {

  }

  protected emailFormControl = new FormControl('', [Validators.email]);

  protected matcher = new ErrorStateMatcher();

  protected add(): void {
    if (!this.emailFormControl.value) {
      throw new Error('Email error');
    }
    this.changedEmail = this.emailFormControl.value
  }
}
