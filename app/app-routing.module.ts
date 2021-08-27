import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { ProfileComponent } from "./pages/profile/profile.component";
import { PageNotFoundComponent } from "./pages/page-not-found.component";
const routes: Route[] = [
  {
    path: 'quran', 
    loadChildren: () =>import("./modules/quran/quran.module").then(m => m.QuranModule),
    data: {
      title: "quran"
    }
  },
  {
    path: 'demo', 
    loadChildren: () =>import("./modules/demo/demo.module").then(m => m.DemoModule),
    data: {
      title: "demo"
    }
  },
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: 'quran', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
