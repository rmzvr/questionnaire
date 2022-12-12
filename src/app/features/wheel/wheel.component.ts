import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { WheelService } from 'src/app/features/wheel/services/wheel.service';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss'],
})
export class WheelComponent {
  constructor(public wheelService: WheelService) {}

  public floor(arg: number): number {
    return Math.floor(arg);
  }
}
