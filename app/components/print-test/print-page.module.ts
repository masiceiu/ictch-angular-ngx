import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PrintPageComponent } from './print-page.component';
import { PrintContentComponent } from './print-content.component';
import { PrintContainerComponent } from './print-container.component';

@NgModule({
  imports: [ FormsModule ],
  declarations: [ 
    PrintPageComponent, 
    PrintContainerComponent, 
    PrintContentComponent,
  ],
  exports:[PrintPageComponent]
})
export class PrintPageModule { }
