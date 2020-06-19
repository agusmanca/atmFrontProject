import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthCtrlGuard } from './guard/auth-ctrl.guard'
import { SearchFormComponent } from './search/search-form/search-form.component';

const routes: Routes = [
  {path:'', component: HomeComponent, canActivate:[AuthCtrlGuard]},  
  {path:'home', component: HomeComponent, canActivate:[AuthCtrlGuard]}, 
  {path:'buscar', component: SearchFormComponent, canActivate:[AuthCtrlGuard]},  
  {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
