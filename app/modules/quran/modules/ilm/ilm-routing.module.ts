import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { IlmComponent } from "./ilm.component";

const routes: Route[] = [
  {
    path: "",
    component: IlmComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IlmRoutingModule {}
