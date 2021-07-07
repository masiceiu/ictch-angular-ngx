import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingsComponent } from "./landings.component";
import { LandingsRoutingModule } from "./landings-routing.module";
import { AyatCardComponent } from './../shared/components/ayat-card/ayat-card.component';
import { AyatDynamicComponent } from './components/ayat-dynamic/ayat-dynamic.component';

@NgModule({
  imports: [
    CommonModule, 
    LandingsRoutingModule
  ],
  declarations: [
    LandingsComponent, 
    AyatCardComponent,
    AyatDynamicComponent,
  ],
  entryComponents: [AyatCardComponent]
})
export class LandingsModule {}
