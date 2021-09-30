import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { SideTogglerComponent } from './side-toggler/side-toggler.component';
import { StateButtonTestComponent } from './state-button-test/state-button-test.component';
//import { AttendanceComponent } from './attendance/attendance.component';
//import { StateButtonComponent } from './state-button/state-button.component';

const routes: Routes = [
  {
    path: "css",
    //component: ?,
    children:[
      {
        path: "",
        loadChildren: () =>
        import("./css/css.module").then(m => m.CssModule),
        data: {
          feature: "CSS"
        }
      }
    ]
  },
  {
    path: "attendance",
    //component: ?,
    children:[
      {
        path: "",
        loadChildren: () =>
        import("./attendance/attendance.module").then(m => m.AttendanceModule),
        data: {
          feature: "Attendance"
        }
      }
    ]
  },
  { path: 'side-toggler', component: SideTogglerComponent },
  { path: 'app-state-button-tes', component: StateButtonTestComponent },
  {
    path: '',
    component: DemoComponent, 
    data: {
       feature: 'Home'
     } 
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
