import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-im-call-form',
  templateUrl: './im-call-form.component.html',
  styleUrls: ['./im-call-form.component.scss']
})
export class ImCallFormComponent {
  constructor(
    public dialog: MatDialogRef<ImCallFormComponent>
  ) { }

  close() {
    this.dialog.close()
  }

}
