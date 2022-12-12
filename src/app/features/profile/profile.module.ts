import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ProfileComponent } from './profile.component';
import { ResultHistoryComponent } from './components/result-history/result-history.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailPanelComponent } from './components/email-panel/email-panel.component';
import { PasswordPanelComponent } from './components/password-panel/password-panel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AvatarPanelComponent } from './components/avatar-panel/avatar-panel.component';
import { AdditionalPanelComponent } from './components/additional-panel/additional-panel.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';






@NgModule({
  declarations: [
    ProfileComponent,
    EmailPanelComponent,
    PasswordPanelComponent,
    AvatarPanelComponent,
    AdditionalPanelComponent,
    ResultHistoryComponent,
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
    MatTabsModule,
    MatCardModule,


  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }