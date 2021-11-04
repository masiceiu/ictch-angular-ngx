import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//Module
import { AyatRoutingModule } from "./ayat-routing.module";
//import { AyatSearchModule } from "./ayat-search/ayat-search.module";

import { NavCarouselModule } from './../../shared/components/nav-carousel/nav-carousel.module';
//import { NavScrollerModule } from './../../shared/components/nav-scroller/nav-scroller.module';
//Component
import { AyatComponent } from "./ayat.component";

@NgModule({
  imports: [
    CommonModule, 
    AyatRoutingModule,
    NavCarouselModule,
    //AyatSearchModule, 
    //NavScrollerModule,
  ],
  declarations: [
    AyatComponent, 
  ]
})
export class AyatModule {}
