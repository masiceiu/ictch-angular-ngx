import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RndRoutingModule } from './rnd-routing.module';
import { RndComponent } from './rnd.component';
import { CommentsComponent } from './comments/comments.component';

import { PrettyJsonComponent } from './pretty-json/pretty-json.component';
import { FormatterComponent } from './pretty-json/formatter/formatter.component';
import {JsonFormsComponentTest, JsonFormComponent} from './json-forms/json-forms.component';
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
    PrettyJsonComponent, 
    FormatterComponent,
    JsonFormsComponentTest, JsonFormComponent
  ]
})
export class RndModule { 

}