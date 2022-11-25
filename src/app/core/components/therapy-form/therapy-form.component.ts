import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Specialists } from '../../models/specialist.model';

@Component({
  selector: 'app-therapy-form',
  templateUrl: './therapy-form.component.html',
  styleUrls: ['./therapy-form.component.scss']
})
export class TherapyFormComponent {

  @Input() therapyDate:string=''

  phoneNumber: string = ''
  specialistName: string = ''
  // therapyDate: string = ''


  constructor(
    public dialog: MatDialogRef<TherapyFormComponent>
  ) { }

  add(phoneNumbert: string, specialistName: string,therapyDate: string ) {
    this.phoneNumber = phoneNumbert
    this.specialistName = specialistName
    this.therapyDate = therapyDate

    console.log( this.specialistName, this.phoneNumber,  this.therapyDate 
      )

    this.close()
  }

  close() {
    this.dialog.close()
  }

}
