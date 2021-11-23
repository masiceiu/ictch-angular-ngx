import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { InputUserFormComponent } from './input-form/input-form.component';
import { DisplayUserDataComponent } from './display-data/display-data.component';

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
    path: 'user/:uid',
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
    InputUserFormComponent,
    DisplayUserDataComponent
  ],
  declarations: [
    UserComponent,
    InputUserFormComponent,
    DisplayUserDataComponent
  ]
})
export class UserModule { }