import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { CssModule } from './css/css.module';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
//import { AttendanceModule } from './attendance/attendance.module';
import { StateButtonComponent } from './state-button/state-button.component';
import { SideTogglerComponent } from './side-toggler/side-toggler.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    CssModule,
  ],
  declarations: [
    DemoComponent,
    //StateButtonComponent,
    SideTogglerComponent,
  ]
})
export class DemoModule { }
