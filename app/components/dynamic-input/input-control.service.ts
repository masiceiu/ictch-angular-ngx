import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InputBase } from './input-base';

@Injectable()
export class InputControlService {
  constructor() { }

  toFormGroup(inputs: InputBase<string>[] ) {
    const group: any = {};

    inputs.forEach(input => {
      switch(input.type){
      case 'checkbox'://[false, Validators.requiredTrue]
        group[input.key] = input.required ? new FormControl(false, Validators.required)
            : new FormControl(false);
console.log(input.type);
          break;
          default:
            group[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
            : new FormControl(input.value || '');
          break;
      }
    });
    return new FormGroup(group);
  }
}