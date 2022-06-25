import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicInputComponent } from './dynamic-input.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicInputComponent,DynamicFormComponent
  ],
  declarations: [
    DynamicInputComponent, 
    DynamicFormComponent, 
    DynamicFormInputComponent
  ]
})
export class DynamicInputModule { }
//https://stackblitz.com/edit/angular-dynamic-form-builder-e1qiha