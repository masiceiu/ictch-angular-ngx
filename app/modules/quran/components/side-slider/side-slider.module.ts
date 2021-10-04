import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideSliderComponent } from './side-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    SideSliderComponent
  ],
  declarations: [
    SideSliderComponent
  ]
})
export class SideSliderModule { }