import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ActivityComponent} from './components/activity/activity.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/pages/home/home.component';
import {LoadingspinnerComponent} from './components/loadingspinner/loadingspinner.component';
import {MainComponent} from './components/pages/main/main.component';
import {LoginComponent} from './components/pages/login/login.component';
import {ActivityService} from "./components/activity/activity.service";
import {AuthInterceptorService} from "./components/auth/auth-interceptor.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ContentComponent} from './components/pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivityComponent,
    HomeComponent,
    LoadingspinnerComponent,
    MainComponent,
    LoginComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule
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
