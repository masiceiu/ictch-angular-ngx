import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { ContactComponent } from "./contact.component";


const routes: Route[] = [
  {
    path: "",
    component: ContactComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
