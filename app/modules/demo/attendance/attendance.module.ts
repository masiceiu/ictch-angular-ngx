import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AttendanceComponent } from './attendance.component';
import { AttendanceRoutingModule } from './attendance-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AttendanceRoutingModule
  ],
  declarations: [
    AttendanceComponent,
    EmployeeComponent,
    AlertComponent,
    RegisterComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    TitlePipe
  ],
  providers: [TrackingService]
})
export class AttendanceModule { }