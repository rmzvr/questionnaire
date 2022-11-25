import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Specialists } from '../../models/specialist.model';

@Component({
  selector: 'app-therapy-form',
  templateUrl: './therapy-form.component.html',
  styleUrls: ['./therapy-form.component.scss']
})
export class TherapyFormComponent {

  @Input() therapyDate:Date = new Date()

  phoneNumber: string = ''
  specialistName: string = ''


  constructor(
    public dialog: MatDialogRef<TherapyFormComponent>
  ) { }

  add(phoneNumbert: string, specialistName: string,therapyDate: Date ) {
    this.phoneNumber = phoneNumbert
    this.specialistName = specialistName
    this.therapyDate = therapyDate

    this.close()
  }

  close() {
    this.dialog.close()
  }

}
