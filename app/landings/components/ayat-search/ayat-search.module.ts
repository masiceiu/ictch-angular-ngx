import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Module
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SharedModule } from '../../../shared/shared.module';
import { InputModule } from './question/question.module';
//Component
import { ConfigComponent } from './config/config.component';
import { AyatSearchComponent } from './ayat-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(), 
    SharedModule,
    InputModule
  ],
  exports: [
    InputModule,
    AyatSearchComponent
  ],
  declarations: [
    ConfigComponent,
    AyatSearchComponent,
  ]
})
export class AyatSearchModule { }