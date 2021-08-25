import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IlmComponent } from './ilm.component';
import { IlmRoutingModule } from './ilm-routing.module';

import { AdviceComponent } from './advice/advice.component';

@NgModule({
  imports: [
    CommonModule,
    IlmRoutingModule
  ],
  exports: [
    IlmComponent,
    AdviceComponent
  ],
  declarations: [
    IlmComponent,
    AdviceComponent
  ]
})
export class IlmModule { }