import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-form',
  templateUrl: './call-form.component.html',
  styleUrls: ['./call-form.component.scss']
})
export class CallFormComponent implements OnInit{

  phoneNumber = +380

  ngOnInit(): void {

  }

  add(phoneNumber:number){
    this.phoneNumber = phoneNumber
    console.log(this.phoneNumber)
  }

}
