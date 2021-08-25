import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Module
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SharedModule } from './../../shared/shared.module';
//Component
import { ConfigComponent } from './config/config.component';
import { AyatSearchComponent } from './ayat-search.component';
import { DynamicInputModule } from '../../../../components/dynamic-input/dynamic-input.module';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(), 
    SharedModule,
    DynamicInputModule
  ],
  exports: [
    DynamicInputModule,
    AyatSearchComponent,SettingComponent
  ],
  declarations: [
    ConfigComponent,
    SettingComponent,
    AyatSearchComponent,
  ]
})
export class AyatSearchModule { }