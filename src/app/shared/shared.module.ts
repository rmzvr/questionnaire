import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmEmailDialogComponent } from './components/confirm-email-dialog/confirm-email-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ConfirmEmailDialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [ConfirmEmailDialogComponent],
})
export class SharedModule {}
