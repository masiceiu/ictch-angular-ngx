import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule
  ],
  declarations: [
  ]
})
export class ComponentsModule { }