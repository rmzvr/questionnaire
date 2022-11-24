import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { StartedButtonComponent } from './components/started-button/started-button.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SpecialistCardComponent } from './components/specialist-card/specialist-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CallMenuComponent } from './components/call-menu/call-menu.component';
import { CallFormComponent } from './components/call-form/call-form.component';
import { TherapyFormComponent } from './components/therapy-form/therapy-form.component';
import { ImCallFormComponent } from './components/im-call-form/im-call-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    StartedButtonComponent,
    InfoCardComponent,
    SpecialistCardComponent,
    FooterComponent,
    CallMenuComponent,
    CallFormComponent,
    TherapyFormComponent,
    ImCallFormComponent
  ],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule, MatCardModule, MatIconModule, MatMenuModule, FormsModule,MatDialogModule],
  exports: [HeaderComponent, StartedButtonComponent, InfoCardComponent, SpecialistCardComponent, FooterComponent, CallMenuComponent, CallFormComponent, TherapyFormComponent, ImCallFormComponent],
})
export class CoreModule { }
