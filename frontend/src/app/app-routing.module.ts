import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {LandingPageComponent} from "./components/pages/landing-page/landing-page.component";
import {LoginComponent} from "./components/pages/login/login.component";
import {AuthGuardService} from "./components/auth/auth-guard.service";
import {ActivityDetailsComponent} from "./components/pages/activity-details/activity-details.component";
import {ActivitiesListsComponent} from "./components/pages/activities-lists/activities-lists.component";
import {PageNotFoundComponent} from "./components/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'trainings', component: ActivitiesListsComponent, canActivate: [AuthGuardService]},
  {path: 'measurements', component: ActivitiesListsComponent, canActivate: [AuthGuardService]},
  {
    path: 'trainings/details',
    children: [{path: ':id', component: ActivityDetailsComponent, canActivate: [AuthGuardService]}]
  },
  {
    path: 'measurements/details',
    children: [{path: ':id', component: ActivityDetailsComponent, canActivate: [AuthGuardService]}]
  },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'lists', component: ActivitiesListsComponent, canActivate: [AuthGuardService]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
