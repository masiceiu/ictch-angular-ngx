import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { CssModule } from './css/css.module';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { SideTogglerComponent } from './side-toggler/side-toggler.component';
import { AttendanceComponent } from './attendance/attendance.component';


@NgModule({
  declarations: [
    DemoComponent,
    SideTogglerComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    CssModule
  ]
})
export class DemoModule { }
