import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivitiesComponent} from './components/pages/activities/activities.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/pages/home/home.component';
import {LoadingspinnerComponent} from './components/loadingspinner/loadingspinner.component';
import {MainComponent} from './components/pages/main/main.component';
import {LoginComponent} from './components/pages/login/login.component';
import {ActivitiesService} from "./components/pages/activities/activities.service";
import {AuthInterceptorService} from "./components/auth/auth-interceptor.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgxPaginationModule} from "ngx-pagination";
import {ActivityDetailsComponent} from './components/pages/activity-details/activity-details.component';
import {LineChartComponent} from './components/line-chart/line-chart.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {ModalComponent} from './components/modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from "@angular/common";
import {ToastrModule} from "ngx-toastr";
import {FooterComponent} from './components/footer/footer.component';
import {MainComponentComponent} from './components/main-component/main-component.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {ActivitiesListsComponent} from './components/pages/activities-lists/activities-lists.component';
import {SortDirective} from './util/sort.directive';
import {PageNotFoundComponent} from './components/pages/page-not-found/page-not-found.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActivitiesComponent,
    HomeComponent,
    LoadingspinnerComponent,
    MainComponent,
    LoginComponent,
    ActivityDetailsComponent,
    LineChartComponent,
    ModalComponent,
    FooterComponent,
    MainComponentComponent,
    ActivitiesListsComponent,
    SortDirective,
    PageNotFoundComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    MDBBootstrapModule.forRoot(),
    CommonModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ActivitiesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
