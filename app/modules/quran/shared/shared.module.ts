import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextHighlightDirective } from './directives/text-highlight.directive';
import { ScrollableItemDirective } from './directives/scrollable-item.directive';

@NgModule({
  declarations: [
    TextHighlightDirective,
    ScrollableItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextHighlightDirective,
    ScrollableItemDirective
  ]
})
export class SharedModule { }