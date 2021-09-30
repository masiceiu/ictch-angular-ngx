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
//Component
import { ConfigComponent } from './config/config.component';
import { AyatSearchComponent } from './ayat-search.component';
import { SettingComponent } from './setting/setting.component';
import { SlideContentComponent } from './slide-content/slide-content.component';
import { DynamicInputModule } from '../../../../../components/dynamic-input/dynamic-input.module';
import { IndexContentComponent } from './index-content/index-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    //BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(), 
    SharedModule,
    DynamicInputModule, 
    InfiniteScrollModule
  ],
  exports: [
    AyatSearchComponent,
    SettingComponent
  ],
  declarations: [
    ConfigComponent,
    SettingComponent,
    SlideContentComponent,
    AyatSearchComponent,
    IndexContentComponent
  ]
})
export class AyatSearchModule { }