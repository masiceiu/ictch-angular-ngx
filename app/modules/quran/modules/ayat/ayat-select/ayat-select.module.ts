import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Module
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SharedModule } from './../../../shared/shared.module';
//Component

import { AyatCardModule } from '../../../shared/components/ayat-card/ayat-card.module';
import { AyatSelectComponent } from './ayat-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(), 
    SharedModule,
    AyatCardModule
  ],
  exports: [
  ],
  declarations: [
    AyatSelectComponent,
  ]
})

export class AyatSelectModule { }