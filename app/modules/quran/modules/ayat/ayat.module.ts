import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
//Module
//import { SharedModule } from "../../shared/shared.module";
import { AyatRoutingModule } from "./ayat-routing.module";
//import { AyatCardModule } from './../shared/components/ayat-card/ayat-card.module';
//import { AddBtnFixedModule } from './../shared/components/add-btn-fixed/add-btn-fixed.module';
import { NavCarouselModule } from './../../shared/components/nav-carousel/nav-carousel.module';
import { AyatSearchModule } from "./ayat-search/ayat-search.module";
//Component
import { AyatComponent } from "./ayat.component";
//import { AyatDynamicComponent } from './ayat-dynamic/ayat-dynamic.component';
//import { AyatSearchComponent } from './components/ayat-search/ayat-search.component';
import { AyatSelectComponent } from './ayat-select/ayat-select.component';

@NgModule({
  imports: [
    //FormsModule,
    CommonModule, 
    //ReactiveFormsModule,
    AyatRoutingModule,
    //SharedModule,
    //AyatCardModule,
    //AddBtnFixedModule,
    NavCarouselModule,
    //BsDropdownModule.forRoot(),
    //TypeaheadModule.forRoot(), 
    AyatSearchModule, 
  ],
  declarations: [
    AyatComponent, 
    //AyatDynamicComponent,
    AyatSelectComponent,
  ],
  entryComponents: []
})
export class AyatModule {}
