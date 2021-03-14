import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent, Test1Component, Test2Component, Test3Component } from './content-nested.component';

@NgModule({
  imports:      [ FormsModule ],
  declarations: [ AppComponent, Test1Component, Test2Component, Test3Component ]
})
export class ContentNestedModule { }
