import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ActivityComponent } from './components/activity/activity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoadingspinnerComponent } from './components/loadingspinner/loadingspinner.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import {ActivityService} from "./components/activity/activity.service";
import {AuthInterceptorService} from "./components/auth/auth-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivityComponent,
    HomeComponent,
    LoadingspinnerComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ActivityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
