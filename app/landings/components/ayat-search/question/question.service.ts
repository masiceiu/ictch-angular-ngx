import { Injectable } from '@angular/core';

import { DropdownInput } from './question-dropdown';
import { InputBase } from './question-base';
import { TextboxInput } from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class InputService {

  // TODO: get from a remote source of question metadata
  getInputs() {

    const questions: InputBase<string>[] = [

      new DropdownInput({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxInput({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxInput({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}