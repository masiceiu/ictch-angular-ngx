import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { 
  SlideContentComponent,
  SubSlideContentComponent,
 } from './slide-content.component';
import { NavScrollerModule } from './../../../../shared/components/nav-scroller/nav-scroller.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NavScrollerModule,
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