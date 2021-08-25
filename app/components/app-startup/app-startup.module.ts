import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverModule } from 'ngx-bootstrap/popover';
import { AppStartupComponent } from './app-startup.component';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule.forRoot()
  ],
  exports: [
    AppStartupComponent
  ],
  declarations: [
    AppStartupComponent
  ]
})
export class AppStartupModule { }