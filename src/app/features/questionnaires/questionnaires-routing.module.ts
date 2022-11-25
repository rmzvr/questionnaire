import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { QuestionnairesComponent } from './questionnaires.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionnairesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnairesRoutingModule {}
