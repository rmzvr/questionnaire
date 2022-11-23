import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { StartedButtonComponent } from './components/started-button/started-button.component';

@NgModule({
  declarations: [HeaderComponent, StartedButtonComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  exports: [HeaderComponent,StartedButtonComponent],
})
export class CoreModule {}
