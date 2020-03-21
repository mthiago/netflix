import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component'
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component'
import { InfosComponent } from './component/infos/infos.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent
  },      
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'infos',
    component: InfosComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
