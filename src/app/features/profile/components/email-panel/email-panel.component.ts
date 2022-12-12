import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-email-panel',
  templateUrl: './email-panel.component.html',
  styleUrls: ['./email-panel.component.scss']
})
export class EmailPanelComponent {
  @Input()
  public userEmail: string = ''
  public panelOpenState: boolean = false

  ngOnInit() {

  }

  protected closePanel(): void {
    this.panelOpenState = false;
  }
}
