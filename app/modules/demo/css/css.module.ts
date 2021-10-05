import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { CssComponent } from './css.component';
import { CssRoutingModule } from './css-routing.module';
import { ArrowComponent } from './arrow/arrow.component';
import { ArrowListComponent } from './arrow-list/arrow-list.component';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { DirectChatComponent } from './direct-chat/direct-chat.component';
import { DynamicInputModule } from './../../../components/dynamic-input/dynamic-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CssRoutingModule
  ],
  declarations: [
    ArrowComponent,
    CssComponent,
    IconBarComponent,
    DirectChatComponent,
    ArrowComponent,
    ArrowListComponent

  ]
})
export class CssModule { }