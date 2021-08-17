import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuestionComponent } from './question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    QuestionComponent
  ],
  declarations: [
    QuestionComponent, 
    DynamicFormComponent, 
    DynamicFormQuestionComponent
  ]
})
export class QuestionModule { }
