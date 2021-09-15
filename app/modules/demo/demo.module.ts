import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssModule } from './css/css.module';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { SideTogglerComponent } from './side-toggler/side-toggler.component';


@NgModule({
  declarations: [
    DemoComponent,
    SideTogglerComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    CssModule
  ]
})
export class DemoModule { }
