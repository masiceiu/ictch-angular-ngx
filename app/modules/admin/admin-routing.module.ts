import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: "dyn",
    //component: ?,
    children:[
      {
        path: "",
        loadChildren: () =>
        import("./modules/dyn/dyn.module").then(m => m.DynModule),
        data: {
          feature: "Dyn"
        }
      }
    ]
  },
  {
    path: 'index',
    component: AdminComponent
  },
  { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
