import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageModule } from './features/homepage/homepage.module';
import { SignupComponent } from './features/signup/signup.component';

@NgModule({
  declarations: [AppComponent, SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomepageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
