import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutsComponent } from './layouts/layouts.component';
const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import("./components/user/user.module").then(m => m.UserModule),
    data: {
      title: "User"
    }
  },{
    path: 'product',
    loadChildren: () => import("./components/product/product.module").then(m => m.ProductModule),
    data: {
      title: "Product"
    }
  },{
    path: 'chart',
    loadChildren: () => import("./modules/chart/chart.module").then(m => m.ChartModule),
    data: {
      title: "Chart"
    }
  },
  //{ path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
