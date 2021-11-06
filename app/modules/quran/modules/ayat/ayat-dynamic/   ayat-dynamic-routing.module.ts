import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { AyatDynamicComponent } from './ayat-dynamic.component';

const routes: Route[] = [
  {
    path: "",
    component: AyatDynamicComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyatDynamicRoutingModule {}
