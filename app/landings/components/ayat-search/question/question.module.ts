import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-question/dynamic-form-question.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent
  ],
  declarations: [
    InputComponent, 
    DynamicFormComponent, 
    DynamicFormInputComponent
  ]
})
export class InputModule { }
