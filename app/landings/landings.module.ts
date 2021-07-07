import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingsComponent } from "./landings.component";
import { LandingsRoutingModule } from "./landings-routing.module";
import { AyatDynamicComponent } from './components/ayat-dynamic/ayat-dynamic.component';

@NgModule({
  imports: [
    CommonModule, 
    LandingsRoutingModule
  ],
  declarations: [LandingsComponent, AyatDynamicComponent]
})
export class LandingsModule {}
