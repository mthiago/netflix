import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component'

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },      
  {
    path: 'home',
    component: HomeComponent
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
