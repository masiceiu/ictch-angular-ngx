import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynComponent } from './dyn.component';
import { DynRoutingModule } from './dyn-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DynRoutingModule
  ],
  declarations: [
    DynComponent
  ]
})
export class DynModule { }