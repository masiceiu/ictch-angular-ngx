import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContentNestedComponent, Test1Component, Test2Component, Test3Component } from './content-nested.component';

@NgModule({
  imports: [ FormsModule ],
  declarations: [ 
    Test1Component, 
    Test2Component, 
    Test3Component,
    ContentNestedComponent 
  ],
  exports:[ContentNestedComponent]
})
export class ContentNestedModule { }
