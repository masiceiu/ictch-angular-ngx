import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardSliderComponent } from './card-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CardSliderComponent
  ],
  declarations: [
    CardSliderComponent
  ]
})
export class CardSliderModule { }