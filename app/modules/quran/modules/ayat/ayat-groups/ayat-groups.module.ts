import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyatGroupsRoutingModule } from './ayat-groups-routing.module';
import { SideSliderModule } from './../../../components/side-slider/side-slider.module';

import { AyatGroupsComponent } from './ayat-groups.component';
import { CardSliderComponent } from './../../../components/card-slider/card-slider.component';

@NgModule({
  imports: [
    CommonModule,
    AyatGroupsRoutingModule,
    SideSliderModule,
  ],
  exports: [
  ],
  declarations: [
    AyatGroupsComponent,
    CardSliderComponent
  ]
})
export class AyatGroupsModule { }