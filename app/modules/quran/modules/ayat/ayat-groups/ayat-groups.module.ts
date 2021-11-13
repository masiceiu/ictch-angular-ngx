import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyatGroupsComponent } from './ayat-groups.component';

import { AyatGroupsRoutingModule } from './ayat-groups-routing.module';
import { SideSliderModule } from './../../../components/side-slider/side-slider.module';
import { CardSliderModule } from './../../../components/card-slider/card-slider.module';
@NgModule({
  imports: [
    CommonModule,
    AyatGroupsRoutingModule,
    SideSliderModule,
    CardSliderModule
  ],
  exports: [
  ],
  declarations: [
    AyatGroupsComponent,
  ]
})
export class AyatGroupsModule { }