import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';
import { QuestionnaireRoutingModule } from './questionnaire-routing.module';



@NgModule({
  declarations: [
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule
  ],
  exports: [QuestionnaireComponent]
})
export class QuestionnaireModule { }
