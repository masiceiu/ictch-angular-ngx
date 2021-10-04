import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IlmComponent } from './ilm.component';
import { IlmRoutingModule } from './ilm-routing.module';

import { AdviceComponent } from './advice/advice.component';
import { SideSliderModule } from '../../components/side-slider/side-slider.module';
import { CardSliderComponent } from '../../components/card-slider/card-slider.component';

@NgModule({
  imports: [
    CommonModule,
    IlmRoutingModule,
    SideSliderModule,
  ],
  exports: [
    IlmComponent,
    AdviceComponent
  ],
  declarations: [
    IlmComponent,
    AdviceComponent,
    CardSliderComponent
  ]
})
export class IlmModule { }