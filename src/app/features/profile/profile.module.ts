import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ProfileComponent } from './profile.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmailPanelComponent } from './components/email-panel/email-panel.component';
import { PasswordPanelComponent } from './components/password-panel/password-panel.component';




@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCardComponent,
    EmailPanelComponent,
    PasswordPanelComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
     ReactiveFormsModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }