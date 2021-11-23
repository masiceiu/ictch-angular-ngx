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
    component: UserComponent
  },
  {
    path: 'user',
    component: InputUserFormComponent
  },
  {
    path: 'user/:id',
    component: DisplayUserDataComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
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