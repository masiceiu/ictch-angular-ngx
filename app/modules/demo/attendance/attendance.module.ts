import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceComponent } from './attendance.component';
import { AttendanceRoutingModule } from './attendance-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AttendanceRoutingModule
  ],
  declarations: [
    AttendanceComponent
  ]
})
export class AttendanceModule { }