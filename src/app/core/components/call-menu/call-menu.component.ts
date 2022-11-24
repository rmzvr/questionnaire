import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CallFormComponent } from '../call-form/call-form.component';

@Component({
  selector: 'app-call-menu',
  templateUrl: './call-menu.component.html',
  styleUrls: ['./call-menu.component.scss']
})
export class CallMenuComponent {

  constructor(
    public dialog: MatDialog
  ){}

  openDialog() {
this.dialog.open(CallFormComponent)
  }
}
