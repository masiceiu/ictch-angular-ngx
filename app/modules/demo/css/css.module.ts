import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { ArrowComponent } from './arrow/arrow.component';
import { CssRoutingModule } from './css-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CssRoutingModule
  ],
  declarations: [
    ArrowComponent,
    CssComponent
  ]
})
export class CssModule { }