import { MatDialog } from '@angular/material/dialog';
import { WheelService } from '../../services/wheel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxWheelComponent } from 'ngx-wheel';
import { DialogComponent } from '../dialog/dialog.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.scss'],
})
export class SpinWheelComponent implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel: any;
  public isButtonDisabled: boolean = false;
  constructor(public wheelService: WheelService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  start() {
    this.wheel.reset();
    this.wheel.spin();

    this.isButtonDisabled = true;
  }

  after() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { answer: null },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.wheelService.updateStat(result);

      this.isButtonDisabled = false;

      this.wheelService.generateRandomId();
    });
  }
}
