import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IlmComponent } from './ilm.component';
import { AdviceComponent } from './advice/advice.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    IlmComponent,
    AdviceComponent
  ],
  declarations: [
    IlmComponentm,
    AdviceComponent
  ]
})
export class IlmModule { }