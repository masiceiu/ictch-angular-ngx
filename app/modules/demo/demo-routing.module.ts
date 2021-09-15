import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { SideTogglerComponent } from './side-toggler/side-toggler.component';
import { AttendanceComponent } from './attendance/attendance.component';

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
    path: 'home',
    component: DemoComponent
  },
  {
    path: 't1',
    component: SideTogglerComponent
  },
  {
    path: 't2',
    component: AttendanceComponent
  },
  { path: '', redirectTo: 't2', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
