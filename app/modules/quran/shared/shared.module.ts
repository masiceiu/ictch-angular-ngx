import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextHighlightDirective } from './directives/text-highlight.directive';

@NgModule({
  declarations: [
    TextHighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextHighlightDirective
  ]
})
export class SharedModule { }