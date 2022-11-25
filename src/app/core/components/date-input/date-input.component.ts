import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {
  therapyDate: Date = new Date()
  @Output() clickEmitter = new EventEmitter();

  
  minDate: Date;

  constructor() {
    const currentDay = new Date().getDate()
    const currentMonth = new Date().getMonth()

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear, currentMonth, currentDay);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0;
  };


  addEvent( event: MatDatepickerInputEvent<Date>) {
    if(!event.value){
      return
    }
    this.therapyDate = event.value

    this.clickEmitter.emit(this.therapyDate)

  }
}
