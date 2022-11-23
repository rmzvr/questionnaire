import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
