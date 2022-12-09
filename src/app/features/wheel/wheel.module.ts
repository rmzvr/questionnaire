import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressModule } from '@coreui/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelComponent } from './wheel.component';
import { CoreModule } from 'src/app/core/core.module';
import { SpinWheelComponent } from './components/spin-wheel/spin-wheel.component';
import { NgxWheelModule } from 'ngx-wheel';

@NgModule({
  declarations: [WheelComponent, SpinWheelComponent],
  imports: [
    CommonModule,
    ProgressModule,
    SharedModule,
    CoreModule,
    NgxWheelModule,
  ],
})
export class WheelModule {}
