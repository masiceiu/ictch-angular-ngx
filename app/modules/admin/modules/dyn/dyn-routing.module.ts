import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynComponent } from './dyn.component';

const routes: Routes = [
  {
    path: '',
    component: DynComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynRoutingModule { }