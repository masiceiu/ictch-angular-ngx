import { Component } from '@angular/core';

import { InputService } from './question.service';
import { InputBase } from './question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [InputService]
})
export class InputComponent {
  questions$: Observable<InputBase<any>[]>;

  constructor(service: InputService) {
    this.questions$ = service.getInputs();
  }
}