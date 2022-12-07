import { ResultComponent } from './features/result/result.component';
import { QuestionnaireComponent } from './features/questionnaire/questionnaire.component';
import { QuestionnairesComponent } from './features/questionnaires/questionnaires.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { RestorePasswordComponent } from './features/restore-password/restore-password.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SigninComponent } from './features/signin/signin.component';
import { SignupComponent } from './features/signup/signup.component';
import { TrainingsComponent } from './features/trainings/trainings.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'restore', component: RestorePasswordComponent },
  {
    path: 'questionnaires',
    component: QuestionnairesComponent,
  },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'questionnaires/:id',
    component: QuestionnaireComponent,
  },
  {
    path: 'questionnaires/:id/result',
    component: ResultComponent,
  },
  { path: 'trainings', component: TrainingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
