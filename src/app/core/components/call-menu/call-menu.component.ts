import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Specialists } from '../../models/specialist.model';
import { CallFormComponent } from '../call-form/call-form.component';
import { ImCallFormComponent } from '../im-call-form/im-call-form.component';
import { TherapyFormComponent } from '../therapy-form/therapy-form.component';

@Component({
  selector: 'app-call-menu',
  templateUrl: './call-menu.component.html',
  styleUrls: ['./call-menu.component.scss']
})
export class CallMenuComponent {

  @Input()
  public specialists :Specialists[] = []

  constructor(
    public dialog: MatDialog
  ) { }

  protected openCallDialog() {
    this.dialog.open(CallFormComponent)
  }

  protected openImCallDialog() {
    this.dialog.open(ImCallFormComponent)
  }

  protected openTherapyDialog() {
    this.dialog.open(TherapyFormComponent)
  }


}


