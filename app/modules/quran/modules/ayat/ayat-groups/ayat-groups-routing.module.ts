import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { AyatGroupsComponent } from './ayat-groups.component';
const routes: Route[] = [
  {
    path: "",
    component: AyatGroupsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyatGroupsRoutingModule {}
