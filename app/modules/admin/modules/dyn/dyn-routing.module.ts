import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynComponent } from './dyn.component';

const routes: Routes = [
  {
    path: 'index',
    component: DynComponent
  },
  { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynRoutingModule { }