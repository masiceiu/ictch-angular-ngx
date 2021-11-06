import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Module
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SharedModule } from './../../../shared/shared.module';
import { AyatDynamicRoutingModule } from './ayat-dynamic-routing.module';
//Component
import { AyatCardModule } from '../../../shared/components/ayat-card/ayat-card.module';
import { AyatDynamicComponent } from './ayat-dynamic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AyatDynamicRoutingModule,
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(), 
    SharedModule,
    AyatCardModule,
  ],
  exports: [
  ],
  declarations: [
    AyatDynamicComponent,
  ]
})
export class AyatDynamicModule { }