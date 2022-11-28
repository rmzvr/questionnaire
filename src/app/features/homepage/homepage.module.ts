import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { CoreModule } from 'src/app/core/core.module';
import { StartedButtonComponent } from './components/started-button/started-button.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SpecialistCardComponent } from './components/specialist-card/specialist-card.component';
import { CallMenuComponent } from './components/call-menu/call-menu.component';
import { TherapyFormComponent } from './components/therapy-form/therapy-form.component';
import { ImCallFormComponent } from './components/im-call-form/im-call-form.component';
import { DateInputComponent } from './components/date-input/date-input.component';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CallFormComponent } from './components/call-form/call-form.component';



@NgModule({
  declarations: [
    HomepageComponent,
    StartedButtonComponent,
    InfoCardComponent,
    SpecialistCardComponent,
    CallMenuComponent,
    TherapyFormComponent,
    ImCallFormComponent,
    DateInputComponent,
    CallFormComponent

  ],
  imports: [
    CommonModule,
    CoreModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  exports: [
    HomepageComponent,
    StartedButtonComponent,
    InfoCardComponent,
    SpecialistCardComponent,
    CallMenuComponent,
    TherapyFormComponent,
    ImCallFormComponent,
    DateInputComponent
  ]
})
export class HomepageModule { }
