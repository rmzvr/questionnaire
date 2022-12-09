import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { ResultRoutingModule } from './result-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EmailDialogComponent } from './components/email-dialog/email-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';

@NgModule({
  declarations: [
    ResultComponent,
    EmailDialogComponent,
    RegisterDialogComponent,
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    CoreModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  exports: [ResultComponent],
})
export class ResultModule {}
