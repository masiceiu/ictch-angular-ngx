import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RndRoutingModule } from './rnd-routing.module';
import { RndComponent } from './rnd.component';
@NgModule({
  imports: [
    CommonModule,
    RndRoutingModule
  ],
  declarations: [RndComponent]
})
export class RndModule { }