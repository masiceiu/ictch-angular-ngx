import { Component, Input } from '@angular/core';

import { DynamicInputService } from './dynamic-input.service';
import { InputBase } from './input-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-input',
  template: `
    <div>
      <h2 *ngIf="showTitle">{{title}}</h2>
      <app-dynamic-form [inputs]="inputs$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [DynamicInputService]
})
export class DynamicInputComponent {
   
  inputs$: Observable<InputBase<any>[]>;
  @Input() title = 'Dynamic Input From';
  @Input() showTitle = true;
  constructor(service: DynamicInputService) {
    this.inputs$ = service.getInputs();
  }
}