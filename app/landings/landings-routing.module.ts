import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { LandingsComponent } from "./landings.component";

const routes: Route[] = [
  {
    path: "",
    component: LandingsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingsRoutingModule {}
