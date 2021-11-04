import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { AyatSearchComponent } from './ayat-search.component';

const routes: Route[] = [
  {
    path: "",
    component: AyatSearchComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyatSearchRoutingModule {}
