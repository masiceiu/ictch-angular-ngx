import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { AyatSelectComponent } from './ayat-select.component';

const routes: Route[] = [
  {
    path: "",
    component: AyatSelectComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyatSelectRoutingModule {}
