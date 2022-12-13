import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  public therapyDate: Date = new Date()

  public isRegister: boolean = false
  public therapyForm!: FormGroup;


  constructor(
    public dialog: MatDialogRef<TherapyFormComponent>,
    private homePageService: HomePageService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.therapyForm = this.formBuilder.group({
      userName: new FormControl(),
      specialistName: new FormControl(),
      phoneNumber: new FormControl(),
    });


    this.specialists = this.homePageService.getSpecialists();
    this.token = localStorage.getItem('token')
    this.isRegister = this.token === null ? false : true
  }

  public get userName(): FormControl {
    return this.therapyForm.get('userName') as FormControl
  }

  public get specialistName(): FormControl {
    return this.therapyForm.get('specialistName') as FormControl
  }

  public get phoneNumber(): FormControl {
    return this.therapyForm.get('phoneNumber') as FormControl
  }

  protected add(): void {
    this.homePageService.addTherapyInfo({
      name: this.therapyForm.value['userName'],
      phoneNumber: this.therapyForm.value['phoneNumber'],
      specialist: this.therapyForm.value['specialistName'],
      date: this.therapyDate
    }).subscribe(() => {
      this.close();
    });
  }

  protected close(): void {
    this.dialog.close()
  }

  getDate(event: Date) {
    this.therapyDate = event
  }

}
