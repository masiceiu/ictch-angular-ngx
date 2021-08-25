import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//Module
import { AyatRoutingModule } from "./ayat-routing.module";
import { AyatSearchModule } from "./ayat-search/ayat-search.module";

import { NavCarouselModule } from './../../shared/components/nav-carousel/nav-carousel.module';
//Component
import { AyatComponent } from "./ayat.component";

@NgModule({
  imports: [
    CommonModule, 
    AyatRoutingModule,
    NavCarouselModule,
    AyatSearchModule, 
  ],
  declarations: [
    AyatComponent, 
  ]
})
export class AyatModule {}
