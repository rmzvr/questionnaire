import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { StartedButtonComponent } from './components/started-button/started-button.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { SpecialistCardComponent } from './components/specialist-card/specialist-card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, StartedButtonComponent, InfoCardComponent, SpecialistCardComponent, FooterComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule,MatCardModule,MatIconModule],
  exports: [HeaderComponent,StartedButtonComponent,InfoCardComponent,SpecialistCardComponent,FooterComponent],
})
export class CoreModule {}
