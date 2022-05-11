import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivityDetailsComponent } from './pages/activity-details/activity-details.component';
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from "./pages/main/main.component";
import { UploadPhotoComponent } from './pages/upload-photo/upload-photo.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {
    path: 'activities', children: [
      {path: '', component: ActivitiesComponent, canActivate: [AuthGuardService]}
    ]
  },
  {
    path: 'details', children: [
      {path: ':id', component: ActivityDetailsComponent, canActivate: [AuthGuardService]}
    ]
  },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'uploadphoto', component: UploadPhotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
