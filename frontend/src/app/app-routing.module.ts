import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {MainComponent} from "./components/pages/main/main.component";
import {ActivityComponent} from "./components/pages/activity/activity.component";
import {LoginComponent} from "./components/pages/login/login.component";
import {AuthGuardService} from "./components/auth/auth-guard.service";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'activity', component: ActivityComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
