import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ProfileComponent } from './profile.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCardComponent,
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatExpansionModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }