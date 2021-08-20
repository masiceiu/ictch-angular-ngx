import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviceInQuranModule } from './../../views/advice-in-quran/advice-in-quran.module';
//import { NavScrollerModule } from './../../components/nav-scroller/nav-scroller.module';

import { SelectedIlmComponent } from './selected-ilm.component';
@NgModule({
  declarations: [
    SelectedIlmComponent
  ],
  imports: [
    CommonModule,
    AdviceInQuranModule,
    //NavScrollerModule
  ],
  exports: [
    SelectedIlmComponent
  ]
})
export class SelectedIlmModule { }