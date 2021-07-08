import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//Module
import { LandingsRoutingModule } from "./landings-routing.module";
import { AyatCardModule } from './../shared/components/ayat-card/ayat-card.module';
import { AddBtnFixedModule } from './../shared/components/add-btn-fixed/add-btn-fixed.module';
//Component
import { LandingsComponent } from "./landings.component";
import { AyatDynamicComponent } from './components/ayat-dynamic/ayat-dynamic.component';

@NgModule({
  imports: [
    CommonModule, 
    LandingsRoutingModule,
    AyatCardModule,
    AddBtnFixedModule
  ],
  declarations: [
    LandingsComponent, 
    AyatDynamicComponent,
  ],
  entryComponents: []
})
export class LandingsModule {}
