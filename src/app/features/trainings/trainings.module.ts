import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { TrainingsComponent } from './trainings.component';



@NgModule({
  declarations: [
    TrainingsComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    TrainingsComponent
]
})
export class TrainingsModule { }
