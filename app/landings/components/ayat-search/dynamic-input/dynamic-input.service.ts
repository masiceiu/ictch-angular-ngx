import { Injectable } from '@angular/core';

import { DropdownInput } from './input-dropdown';
import { InputBase } from './input-base';
import { TextboxInput } from './input-textbox';
import { of } from 'rxjs';

@Injectable()
export class DynamicInputService {

  // TODO: get from a remote source of input metadata
  getInputs() {

    const inputs: InputBase<string>[] = [

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

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}