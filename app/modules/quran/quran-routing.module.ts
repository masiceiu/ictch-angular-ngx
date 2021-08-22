import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

import { QuranComponent } from "./quran.component";
import { SelectedIlmComponent } from './shared/pages/selected-ilm/selected-ilm.component';
//import { SelectedIlmModule } from './shared/pages/selected-ilm/selected-ilm.module';

const routes: Route[] = [
  //{ path: '', redirectTo: 'selectedilms', pathMatch: 'full' },
  { path: '', component: QuranComponent },
  {
    path: "ayat",
    loadChildren: () =>
      import("./ayat/ayat.module").then(m => m.AyatModule),
    data: {
      feature: "ayat"
    }
  },
  {
    path: "ayat",
    loadChildren: () =>
      import("./ayat/ayat.module").then(m => m.AyatModule),
    data: {
      feature: "ayat"
    }
  },
  {
    path: 'selectedilms',
    component: SelectedIlmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuranRoutingModule { }
