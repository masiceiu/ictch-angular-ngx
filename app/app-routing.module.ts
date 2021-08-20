import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { SelectedIlmComponent } from './shared/pages/selected-ilm/selected-ilm.component';
import { IlmChannelComponent } from "./shared/views/ilm-channel/ilm-channel.component";

import { PageNotFoundComponent } from "./pages/page-not-found.component";
//import { SelectedIlmModule } from './shared/pages/selected-ilm/selected-ilm.module';

const routes: Route[] = [
  {
    path: "landings",
    loadChildren: () =>
      import("./landings/landings.module").then(m => m.LandingsModule),
    data: {
      feature: "landings"
    }
  },
  {
    path: 'quran', 
    loadChildren: () =>import("./modules/quran/quran.module").then(m => m.QuranModule),
    data: {
      title: "quran"
    }
  },
  { 
    path: 'selectedilms', 
    component: SelectedIlmComponent
  },
  { 
    path: 'ilmchannel', 
    component: IlmChannelComponent
  },
  {
    path: 'demo', 
    loadChildren: () =>import("./modules/demo/demo.module").then(m => m.DemoModule),
    data: {
      title: "demo"
    }
  },
  { path: '', redirectTo: 'quran', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent},
  /*,
  { 
    path: 'selectedilms', 
    loadChildren: () =>
    import("./shared/pages/selected-ilm/selected-ilm.module").then(m => m.SelectedIlmModule),
    data: {
      feature: "selected-ilms"
    }
  }*/
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
