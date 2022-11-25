import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.scss']
})
export class CallFormComponent implements OnInit {

  phoneNumber: string = ''

  constructor(
    public dialog: MatDialogRef<CallFormComponent>
  ) { }

  ngOnInit(): void {

  }

  add(phoneNumber: string) {
    this.phoneNumber = phoneNumber
    console.log(this.phoneNumber)

    this.close()
  }

  close() {
    this.dialog.close()
  }

}
