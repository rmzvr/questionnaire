import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }