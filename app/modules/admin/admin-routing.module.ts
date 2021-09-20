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
    path: "setup",
    //component: ?,
    children:[
      {
        path: "",
        loadChildren: () =>
        import("./modules/setup/setup.module").then(m => m.SetupModule),
        data: {
          feature: "Dyn"
        }
      }
    ]
  },
  {
    path: '',
    component: AdminComponent, 
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
export class AdminRoutingModule { }
