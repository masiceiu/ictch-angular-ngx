import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

const routes: Route[] = [
  { path: '', redirectTo: 'landings', pathMatch: 'full' },
  {
    path: "landings",
    loadChildren: () =>
      import("./landings/landings.module").then(m => m.LandingsModule),
    data: {
      feature: "landings"
    }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
