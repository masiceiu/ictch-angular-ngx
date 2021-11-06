import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { AyatComponent } from "./ayat.component";
const routes: Route[] = [{
    path: 'dynamic',
    component : AyatComponent,
    loadChildren: () =>
      import('./ayat-dynamic/ayat-dynamic.module').then(
        (m) => m.AyatDynamicModule
      ),
    data: {
      feature: 'dynamic',
    },
  },{
    path: 'search',
    component : AyatComponent,
    loadChildren: () =>
      import('./ayat-search/ayat-search.module').then(
        (m) => m.AyatSearchModule
      ),
    data: {
      feature: 'search',
    },
  },{
    path: 'select',
    component : AyatComponent,
    loadChildren: () =>
      import('./ayat-select/ayat-select.module').then(
        (m) => m.AyatSelectModule
      ),
    data: {
      feature: 'select',
    },
  },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyatRoutingModule {}
