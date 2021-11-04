import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { QuranComponent } from './quran.component';
//import { IlmComponent } from "./ilm/ilm.component";
//import { SelectedIlmComponent } from './shared/pages/selected-ilm/selected-ilm.component';
//import { SelectedIlmModule } from './shared/pages/selected-ilm/selected-ilm.module';

const routes: Route[] = [
  {
    path: 'ayat',
    component: QuranComponent,
    loadChildren: () =>
      import('./modules/ayat/ayat.module').then((m) => m.AyatModule),
    data: {
      feature: 'Ayat',
    },
  },
  {
    path: 'ilm',
    component: QuranComponent,
    loadChildren: () =>
      import('./modules/ilm/ilm.module').then((m) => m.IlmModule),
    data: {
      feature: 'Ilm',
    },
  },
  {
    path: '?',
    component: QuranComponent,
    data: {
      feature: 'Home',
    },
  },
  { path: '', redirectTo: 'ayat', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuranRoutingModule {}
