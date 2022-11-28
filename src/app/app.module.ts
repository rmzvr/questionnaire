import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageModule } from './features/homepage/homepage.module';
import { SignupModule } from './features/signup/signup.module';
import { SigninModule } from './features/signin/signin.module';
import { RestorePasswordModule } from './features/restore-password/restore-password.module';
import { TrainingsModule } from './features/trainings/trainings.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomepageModule,
    SignupModule,
    SigninModule,
    RestorePasswordModule,
    TrainingsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
