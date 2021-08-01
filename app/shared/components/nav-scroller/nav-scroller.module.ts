import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavScrollerComponent } from './nav-scroller.component';
@NgModule({
  declarations: [
    NavScrollerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavScrollerComponent
  ]
})
export class NavScrollerModule { }