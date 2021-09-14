import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: "css",
    //component: ?,
    children:[
      {
        path: "",
        loadChildren: () =>
        import("./../demo/css/css.module").then(m => m.CssModule),
        data: {
          feature: "CSS"
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
