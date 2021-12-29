import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MainComponent} from "./components/main/main.component";
import {ActivityComponent} from "./components/activity/activity.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
