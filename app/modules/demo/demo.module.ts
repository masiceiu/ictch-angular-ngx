import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssModule } from './css/css.module';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    CssModule
  ]
})
export class DemoModule { }
