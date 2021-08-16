import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { SelectedIlmComponent } from './shared/pages/selected-ilm/selected-ilm.component';
import { IlmChannelComponent } from "./shared/views/ilm-channel/ilm-channel.component";
//import { SelectedIlmModule } from './shared/pages/selected-ilm/selected-ilm.module';

const routes: Route[] = [
  { path: '', redirectTo: 'landings', pathMatch: 'full' },
  {
    path: "landings",
    loadChildren: () =>
      import("./landings/landings.module").then(m => m.LandingsModule),
    data: {
      feature: "landings"
    }
  },
  { 
    path: 'selectedilms', 
    component: SelectedIlmComponent
  },
  { 
    path: 'ilmchannel', 
    component: IlmChannelComponent
  }/*,
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
