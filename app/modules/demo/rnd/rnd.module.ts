import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RndRoutingModule } from './rnd-routing.module';
import { PlayMediaModule } from './play-media/play-media.module';

import { RndComponent } from './rnd.component';
import { SseComponent } from './sse/sse.component';
import { CommentsComponent } from './comments/comments.component';
import { JsonToFormComponent } from './json-to-form/json-to-form.component';
import { JsonDynFormComponent } from './json-dyn-form/json-dyn-form.component';
import { AppendToElementComponent } from './append-to-element/append-to-element.component';
import { RangeSelectComponent } from './range-select/range-select.component';
@NgModule({
  imports: [
    CommonModule,
    RndRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PlayMediaModule,
  ],
  declarations: [
    RndComponent,
    CommentsComponent,
    JsonToFormComponent,
    JsonDynFormComponent,
    AppendToElementComponent,
    SseComponent,
    RangeSelectComponent
  ]
})
export class RndModule { 

}