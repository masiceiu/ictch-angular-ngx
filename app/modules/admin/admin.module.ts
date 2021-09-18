import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { DynModule } from './modules/dyn/dyn.module';
import { SetupModule } from './modules/setup/setup.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    DynModule,
    SetupModule
  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule { }