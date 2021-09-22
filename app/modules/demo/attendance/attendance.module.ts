import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AttendanceComponent } from './attendance.component';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { TrackingService } from './employee/tracking.service';
import { TitlePipe } from './employee/list/title.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { RegisterComponent } from './employee/register/register.component';
import { AlertComponent } from './employee/register/alert/alert.component';
import { EmployeeListComponent } from './employee/list/list.component';
import { EmployeeCountComponent } from './employee/list/count/count.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AttendanceRoutingModule
  ],
  declarations: [
    AttendanceComponent,
    EmployeeComponent,
    MonthlyComponent,
    AlertComponent,
    RegisterComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    TitlePipe
  ],
  providers: [TrackingService]
})
export class AttendanceModule { }