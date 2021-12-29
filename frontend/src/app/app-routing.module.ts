import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthComponent} from "./components/auth/auth.component";
import {MainComponent} from "./components/main/main.component";
import {ActivityComponent} from "./components/activity/activity.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'home', component: HomeComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
