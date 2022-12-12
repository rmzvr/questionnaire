import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressModule } from '@coreui/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelComponent } from './wheel.component';
import { CoreModule } from 'src/app/core/core.module';
import { SpinWheelComponent } from './components/spin-wheel/spin-wheel.component';
import { NgxWheelModule } from 'ngx-wheel';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WheelComponent, SpinWheelComponent, DialogComponent],
  imports: [
    CommonModule,
    ProgressModule,
    SharedModule,
    CoreModule,
    NgxWheelModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class WheelModule {}
