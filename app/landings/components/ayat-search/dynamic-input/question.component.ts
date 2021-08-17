import { Component } from '@angular/core';

import { InputService } from './input.service';
import { InputBase } from './input-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-input',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [inputs]="inputs$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [InputService]
})
export class InputComponent {
  inputs$: Observable<InputBase<any>[]>;

  constructor(service: InputService) {
    this.inputs$ = service.getInputs();
  }
}