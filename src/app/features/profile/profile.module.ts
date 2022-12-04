import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ProfileComponent } from './profile.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailPanelComponent } from './components/email-panel/email-panel.component';
import { PasswordPanelComponent } from './components/password-panel/password-panel.component';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AvatarPanelComponent } from './components/avatar-panel/avatar-panel.component';
import { AdditionalPanelComponent } from './components/additional-panel/additional-panel.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatSelectModule} from '@angular/material/select';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCardComponent,
    EmailPanelComponent,
    PasswordPanelComponent,
    AvatarPanelComponent,
    AdditionalPanelComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatFileInputModule,
    MatSelectModule,
    MatSelectCountryModule.forRoot('de'),
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }