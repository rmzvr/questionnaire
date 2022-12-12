import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialist-card',
  templateUrl: './specialist-card.component.html',
  styleUrls: ['./specialist-card.component.scss']
})
export class SpecialistCardComponent implements OnInit{
@Input()
public name: string = ''
@Input()
public info: string = ''
@Input()
public image:string = ''
@Input()
public id:string = ''

ngOnInit(){
}

}
