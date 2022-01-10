import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {MainComponent} from "./components/pages/main/main.component";
import {ActivitiesComponent} from "./components/pages/activities/activities.component";
import {LoginComponent} from "./components/pages/login/login.component";
import {AuthGuardService} from "./components/auth/auth-guard.service";
import {ActivityComponent} from "./components/pages/activity/activity.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'activities', children: [
      {path: '', component: ActivitiesComponent, canActivate: [AuthGuardService]},
      {path: ':id', component: ActivityComponent, canActivate: [AuthGuardService]}
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
