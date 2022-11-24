import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    CoreModule
  ],
  exports: [QuestionnaireComponent],
})
export class QuestionnaireModule {}
