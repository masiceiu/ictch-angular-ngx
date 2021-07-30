import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
//Module
import { LandingsRoutingModule } from "./landings-routing.module";
import { AyatCardModule } from './../shared/components/ayat-card/ayat-card.module';
import { AddBtnFixedModule } from './../shared/components/add-btn-fixed/add-btn-fixed.module';
import { NavCarouselModule } from './../shared/components/nav-carousel/nav-carousel.module';
//Component
import { LandingsComponent } from "./landings.component";
import { AyatDynamicComponent } from './components/ayat-dynamic/ayat-dynamic.component';
import { AyatSearchComponent } from './components/ayat-search/ayat-search.component';
import { FormsModule } from "@angular/forms";
import { AyatSelectComponent } from './components/ayat-select/ayat-select.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule, 
    LandingsRoutingModule,
    AyatCardModule,
    AddBtnFixedModule,
    NavCarouselModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  declarations: [
    LandingsComponent, 
    AyatDynamicComponent, AyatSearchComponent, AyatSelectComponent,
  ],
  entryComponents: []
})
export class LandingsModule {}
