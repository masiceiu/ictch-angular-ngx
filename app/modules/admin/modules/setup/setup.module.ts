import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SetupComponent } from './setup.component';
import { TreeComponent } from './setup.component';

import { SetupRoutingModule } from './setup-routing.module';
import { SetupService } from './setup.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SetupRoutingModule
  ],
  declarations: [
    SetupComponent,
    TreeComponent
  ],
  providers: [SetupService]
})
export class SetupModule { }