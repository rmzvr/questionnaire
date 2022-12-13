import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.scss']
})
export class CallFormComponent implements OnInit {

  public callForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialogRef<CallFormComponent>,
    public homePageService: HomePageService,
  ) { }

  ngOnInit(): void {
    this.callForm = this.formBuilder.group({
      userName: new FormControl(),
      phoneNumber: new FormControl(),
    });
  }

  public get userName(): FormControl {
    return this.callForm.get('userName') as FormControl
  }

  public get phoneNumber(): FormControl {
    return this.callForm.get('phoneNumber') as FormControl
  }

  protected add(): void {
    this.homePageService.postCallInfo({
      name: this.callForm.value['userName'],
      phoneNumber: this.callForm.value['phoneNumber']
    }).subscribe(() => {
      this.close()
    });
  }

  protected close(): void {
    this.dialog.close()
  }

}
