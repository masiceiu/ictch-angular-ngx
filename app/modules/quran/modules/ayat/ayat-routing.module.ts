import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { AyatComponent } from "./ayat.component";
import { AyatGroupsComponent } from "./ayat-groups/ayat-groups.component";
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
  },{
    path: 'groups/:group',
    component : AyatComponent,
    loadChildren: () =>
      import('./ayat-groups/ayat-groups.module').then(
        (m) => m.AyatGroupsModule
      ),
    data: {
      feature: 'groups',
    },
  },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyatRoutingModule {}
