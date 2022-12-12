import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Country } from '@angular-material-extensions/select-country';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-additional-panel',
  templateUrl: './additional-panel.component.html',
  styleUrls: ['./additional-panel.component.scss']
})
export class AdditionalPanelComponent implements OnInit {
  public isBirthdaySet: boolean = false
  public panelOpenState: boolean = false

  protected countryFormControl = new FormControl();
  protected BirthdayFormControl = new FormControl();
  protected GenderFormControl = new FormControl();
  protected maxDate: Date;

constructor(private profileService: ProfileService,
  private router: Router,
  ){
    const currentDay = new Date().getDate()
    const currentMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear, currentMonth, currentDay);

  }

  ngOnInit() {

  }

  protected add(): void {

    this.profileService.addAdditionalInfo({
      gender: this.GenderFormControl.value,
      country: this.countryFormControl.value.name,
      birthday: formatDate(this.BirthdayFormControl.value, 'dd/MM/yyyy', 'en')
      
    }).subscribe(() => {
      this.router.navigate(['/profile']);
    });
   }

 
}
