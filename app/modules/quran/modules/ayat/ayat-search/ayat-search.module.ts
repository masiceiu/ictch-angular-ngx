import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Module
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SharedModule } from './../../../shared/shared.module';
import { AyatSearchRoutingModule } from './ayat-search-routing.module';
import { SlideContentModule } from './slide-content/slide-content.module';
import { SideSliderModule} from '../../../components/side-slider/side-slider.module';
import { DynamicInputModule } from '../../../../../components/dynamic-input/dynamic-input.module';
//Component 
import { ConfigComponent } from './config/config.component';
import { SettingComponent } from './setting/setting.component';

import { AyatSearchComponent } from './ayat-search.component';

import { SearchAyatComponent } from './search-ayat/search-ayat.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { SearchContentComponent } from './search-content/search-content.component';
  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(), 
    SharedModule,
    DynamicInputModule, 
    InfiniteScrollModule,
    SideSliderModule,
    SlideContentModule,
    AyatSearchRoutingModule
  ],
  declarations: [
    ConfigComponent,
    SettingComponent,
    AyatSearchComponent,
    SearchAyatComponent,
    IndexContentComponent,
    SearchContentComponent
  ]
})
export class AyatSearchModule { }