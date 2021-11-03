import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { 
  SlideContentComponent,
  SubSlideContentComponent,
 } from './slide-content.component';
 import { SharedModule } from './../../../../shared/shared.module';
import { NavScrollerModule } from './../../../../shared/components/nav-scroller/nav-scroller.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NavScrollerModule,
    SharedModule
  ],
  exports:[
    SlideContentComponent,
  ],
  declarations: [
    SlideContentComponent,
    SubSlideContentComponent
  ]
})
export class SlideContentModule { }