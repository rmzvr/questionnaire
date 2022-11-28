import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageModule } from './features/homepage/homepage.module';
import { SignupModule } from './features/signup/signup.module';
import { SigninModule } from './features/signin/signin.module';
import { RestoreModule } from './features/restore/restore.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomepageModule,
    SignupModule,
    SigninModule,
    RestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
