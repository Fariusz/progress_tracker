import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {MainComponent} from "./components/pages/main/main.component";
import {ActivitiesComponent} from "./components/pages/activities/activities.component";
import {LoginComponent} from "./components/pages/login/login.component";
import {AuthGuardService} from "./components/auth/auth-guard.service";
import {ActivityFormComponent} from "./components/pages/activity-form/activity-form.component";
import {ActivityDetailsComponent} from "./components/pages/activity-details/activity-details.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'activities', children: [
      {path: '', component: ActivitiesComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: ActivityFormComponent, canActivate: [AuthGuardService]}
    ]
  },
  {path: 'details', children: [
      {path: ':id', component: ActivityDetailsComponent, canActivate: [AuthGuardService]}
    ]
  },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
