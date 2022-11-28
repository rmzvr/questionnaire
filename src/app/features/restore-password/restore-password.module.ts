import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestorePasswordComponent } from './restore-password.component';
import { CoreModule } from 'src/app/core/core.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RestorePasswordComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class RestorePasswordModule {}
