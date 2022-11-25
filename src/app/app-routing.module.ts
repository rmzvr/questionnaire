import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { SigninComponent } from './features/signin/signin.component';
import { SignupComponent } from './features/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  {
    path: 'questionnaires',
    loadChildren: () =>
      import('./features/questionnaires/questionnaires.module').then(
        (module) => module.QuestionnairesModule
      ),
  },
  {
    path: 'questionnaires/:name',
    loadChildren: () =>
      import('./features/questionnaire/questionnaire.module').then(
        (module) => module.QuestionnaireModule
      ),
  },
  {
    path: 'questionnaires/:name/result',
    loadChildren: () =>
      import('./features/result/result.module').then(
        (module) => module.ResultModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
