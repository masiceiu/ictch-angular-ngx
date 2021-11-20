import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RndRoutingModule } from './rnd-routing.module';
import { RndComponent } from './rnd.component';
import { CommentsComponent } from './comments/comments.component';
import { PlayMediaComponent } from './play-media/play-media.component';
import { AppendToElementComponent } from './append-to-element/append-to-element.component';
@NgModule({
  imports: [
    CommonModule,
    RndRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RndComponent,
    CommentsComponent,
    PlayMediaComponent,
    AppendToElementComponent
  ]
})
export class RndModule { 

}