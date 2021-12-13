import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserListDataComponent } from './list-data/list-data.component';
import { InputUserFormComponent } from './input-form/input-form.component';
import { DisplayUserDataComponent } from './display-data/display-data.component';

import { UserService } from './services/user.service';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children:[
      {
        path: 'list',
        component: UserListDataComponent
      },
      {
        path: 'add',
        component: InputUserFormComponent
      },
      {
        path: 'edit/:id',
        component: DisplayUserDataComponent
      },
      {
        path: 'view/:id',
        component: DisplayUserDataComponent,
        //outlet:"view"
      },
      {
        path: 'cancel/:id',
        component: DisplayUserDataComponent
      },
      { path: '', redirectTo: 'list', pathMatch:"full"},
      //{ path: '**', component: UserComponent}
    ],
  },
  //{ path: '**', component: UserComponent}
  /*{
    path: '',
    component: UserComponent,
    outlet:"index"
  }*/
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserComponent,
    UserListDataComponent,
    InputUserFormComponent,
    DisplayUserDataComponent
  ],
  declarations: [
    UserComponent,
    UserListDataComponent,
    InputUserFormComponent,
    DisplayUserDataComponent
  ],
  providers:[UserService]
})
export class UserModule { }