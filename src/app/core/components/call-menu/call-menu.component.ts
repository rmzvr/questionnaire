import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CallFormComponent } from '../call-form/call-form.component';
import { ImCallFormComponent } from '../im-call-form/im-call-form.component';
import { TherapyFormComponent } from '../therapy-form/therapy-form.component';

@Component({
  selector: 'app-call-menu',
  templateUrl: './call-menu.component.html',
  styleUrls: ['./call-menu.component.scss']
})
export class CallMenuComponent {

  constructor(
    public dialog: MatDialog
  ) { }

  openCallDialog() {
    this.dialog.open(CallFormComponent)
  }

  openImCallDialog() {
    this.dialog.open(ImCallFormComponent)
  }

  openTherapyDialog() {
    this.dialog.open(TherapyFormComponent)
  }


}


