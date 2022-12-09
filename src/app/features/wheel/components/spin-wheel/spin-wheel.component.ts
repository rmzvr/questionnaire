import { WheelService } from '../../services/wheel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxWheelComponent } from 'ngx-wheel';

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.scss'],
})
export class SpinWheelComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  public isButtonDisabled: boolean = false;

  constructor(public wheelService: WheelService) {}

  ngOnInit(): void {}

  start() {
    this.wheel.reset();
    this.wheel.spin();

    this.isButtonDisabled = true;
  }

  after() {
    const answer = window.confirm(
      'Does this emoji corresponds with your mood now?'
    );

    this.wheelService.updateStat(!!answer);

    this.isButtonDisabled = false;

    this.wheelService.generateRandomId();
  }
}
