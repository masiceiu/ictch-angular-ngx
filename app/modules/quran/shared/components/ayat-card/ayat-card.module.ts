import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AyatCardComponent } from './ayat-card.component';
@NgModule({
  declarations: [
    AyatCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AyatCardComponent
  ],
  entryComponents: [AyatCardComponent]
})
export class AyatCardModule { }