import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup-routing.module';
import { SetupService } from './setup.service';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule
  ],
  declarations: [
    SetupComponent
  ],
  providers: [SetupService]
})
export class SetupModule { }