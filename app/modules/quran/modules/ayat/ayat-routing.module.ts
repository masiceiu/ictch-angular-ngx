import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { AyatComponent } from "./ayat.component";

const routes: Route[] = [
  {
    path: "",
    component: AyatComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AyatRoutingModule {}
