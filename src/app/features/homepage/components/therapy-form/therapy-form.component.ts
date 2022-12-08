import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EMPTY, Observable } from 'rxjs';
import { Specialists } from '../../models/specialist.model';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'app-therapy-form',
  templateUrl: './therapy-form.component.html',
  styleUrls: ['./therapy-form.component.scss']
})
export class TherapyFormComponent implements OnInit {
  public specialists: Observable<Specialists[]> = EMPTY
  public token: string | null = null

  @Input()
  public therapyDate: Date = new Date()

  public isRegister: boolean = false
  public phoneNumber: string = ''
  public specialistName: string = ''


  constructor(
    public dialog: MatDialogRef<TherapyFormComponent>,
    private homePageService: HomePageService,

  ) { }

  ngOnInit(): void {
    this.specialists = this.homePageService.getSpecialists();
    this.token = localStorage.getItem('token')
    this.isRegister = this.token === null ? false : true
  }
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
