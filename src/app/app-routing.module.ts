import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallFormComponent } from './core/components/call-form/call-form.component';
import { ImCallFormComponent } from './core/components/im-call-form/im-call-form.component';
import { TherapyFormComponent } from './core/components/therapy-form/therapy-form.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { RestorePasswordComponent } from './features/restore-password/restore-password.component';
import { SigninComponent } from './features/signin/signin.component';
import { SignupComponent } from './features/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomepageComponent ,
  children: [{
    path: 'call-form',
    component: CallFormComponent
  },
  {
      path: 'therapy-form',
      component: TherapyFormComponent 
  },
  {
    path: 'immediately-form',
    component: ImCallFormComponent 
},


]
},
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'restore', component: RestorePasswordComponent },
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
