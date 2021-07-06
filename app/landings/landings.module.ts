import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingsComponent } from "./landings.component";
import { LandingsRoutingModule } from "./landings-routing.module";

@NgModule({
  imports: [
    CommonModule, 
    LandingsRoutingModule
  ],
  declarations: [LandingsComponent]
})
export class LandingsModule {}
