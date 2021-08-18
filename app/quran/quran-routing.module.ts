import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

import { SelectedIlmComponent } from './shared/pages/selected-ilm/selected-ilm.component';
//import { SelectedIlmModule } from './shared/pages/selected-ilm/selected-ilm.module';

const routes: Route[] = [
  //{ path: '', redirectTo: 'selectedilms', pathMatch: 'full' },
  { path: '', component: SelectedIlmComponent },
  /*{
    path: "landings",
    loadChildren: () =>
      import("./landings/landings.module").then(m => m.LandingsModule),
    data: {
      feature: "landings"
    }
  },*/
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
