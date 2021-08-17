import { Component } from '@angular/core';

import { DynamicInputService } from './dynamic-input.service';
import { InputBase } from './input-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-input',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [inputs]="inputs$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [DynamicInputService]
})
export class DynamicInputComponent {
  inputs$: Observable<InputBase<any>[]>;

  constructor(service: DynamicInputService) {
    this.inputs$ = service.getInputs();
  }
}