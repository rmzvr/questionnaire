import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmAccountComponent } from './confirm-account.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ConfirmAccountComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, MatCardModule],
})
export class ConfirmAccountModule {}
