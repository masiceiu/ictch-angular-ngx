import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { CssModule } from './css/css.module';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { SideTogglerComponent } from './side-toggler/side-toggler.component';
import { AttendanceModule } from './attendance/attendance.module';


@NgModule({
  declarations: [
    DemoComponent,
    SideTogglerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    CssModule,
  ]
})
export class DemoModule { }
