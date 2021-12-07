import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
const routes: Routes = [
{
  path: 'user', 
  loadChildren: () =>import("./components/user/user.module").then(m => m.UserModule),
  data: {
    title: "User"
  }
},
//{ path: 'profile', component: ProfileComponent},
{ path: '', redirectTo: 'user', pathMatch: 'full' },
{ path: '**', component: AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
