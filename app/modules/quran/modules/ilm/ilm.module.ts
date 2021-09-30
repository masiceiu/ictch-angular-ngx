import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IlmComponent } from './ilm.component';
import { IlmRoutingModule } from './ilm-routing.module';

import { AdviceComponent } from './advice/advice.component';
import { SideSliderComponent } from '../../components/side-slider/side-slider.component';

@NgModule({
  imports: [
    CommonModule,
    IlmRoutingModule
  ],
  exports: [
    IlmComponent,
    AdviceComponent
  ],
  declarations: [
    IlmComponent,
    AdviceComponent,
    SideSliderComponent
  ]
})
export class IlmModule { }