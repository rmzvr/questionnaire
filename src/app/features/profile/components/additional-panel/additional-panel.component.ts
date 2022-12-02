import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-additional-panel',
  templateUrl: './additional-panel.component.html',
  styleUrls: ['./additional-panel.component.scss']
})
export class AdditionalPanelComponent  implements OnInit{
  public isBirthdaySet: boolean = false
  public panelOpenState: boolean = false

  protected countryFormControl = new FormControl();
  protected BirthdayFormControl = new FormControl();

ngOnInit(){

    
}

  protected add():void { }

  onCountrySelected($event: any) {

  }
}
