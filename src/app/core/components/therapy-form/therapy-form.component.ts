import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Specialists } from '../../models/specialist.model';

@Component({
  selector: 'app-therapy-form',
  templateUrl: './therapy-form.component.html',
  styleUrls: ['./therapy-form.component.scss']
})
export class TherapyFormComponent {

  @Input()
  public therapyDate: Date = new Date()

  public isRegister: boolean = false
  public phoneNumber: string = ''
  public specialistName: string = ''


  constructor(
    public dialog: MatDialogRef<TherapyFormComponent>
  ) { }

  protected add(phoneNumbert: string, specialistName: string, therapyDate: Date): void {
    this.phoneNumber = phoneNumbert
    this.specialistName = specialistName
    this.therapyDate = therapyDate

    this.close()
  }

  protected close(): void {
    this.dialog.close()
  }

}
