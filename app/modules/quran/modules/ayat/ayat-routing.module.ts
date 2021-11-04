import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { AyatComponent } from "./ayat.component";
const routes: Route[] = [
  {
    path: '',
    component : AyatComponent,
    loadChildren: () =>
      import('./ayat-search/ayat-search.module').then(
        (m) => m.AyatSearchModule
      ),
    data: {
      feature: 'Ayat',
    },
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyatRoutingModule {}
