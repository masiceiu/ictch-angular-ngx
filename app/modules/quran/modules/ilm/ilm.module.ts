import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IlmComponent } from './ilm.component';
import { IlmRoutingModule } from './ilm-routing.module';

import { AdviceComponent } from './advice/advice.component';
import { MahramComponent } from './mahram/mahram.component';
import { SideSliderModule } from '../../components/side-slider/side-slider.module';
import { CardSliderModule } from '../../components/card-slider/card-slider.module';

@NgModule({
  imports: [
    CommonModule,
    IlmRoutingModule,
    SideSliderModule,
    CardSliderModule
  ],
  exports: [
    IlmComponent,
    AdviceComponent
  ],
  declarations: [
    IlmComponent,
    AdviceComponent,
    MahramComponent,
  ]
})
export class IlmModule { }