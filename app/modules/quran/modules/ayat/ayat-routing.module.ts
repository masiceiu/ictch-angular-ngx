import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
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
