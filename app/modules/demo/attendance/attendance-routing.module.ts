import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [{
  path: "1",
  component: AttendanceComponent
},{
  path: "",
  component: EmployeeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
