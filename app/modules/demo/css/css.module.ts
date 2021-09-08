import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { ArrowComponent } from './arrow/arrow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArrowComponent,
    CssComponent
  ]
})
export class CssModule { }