import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { AppComponent } from './app.component';

import * as pagesConfig from '../config/pages-config';
// import { AccountManagementComponent } from "./account-management/account-management.component";

const routes: Routes = [

 { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
