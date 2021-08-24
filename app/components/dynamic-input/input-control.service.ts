import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { InputBase } from './input-base';

@Injectable()
export class InputControlService {
  constructor() { }

  toFormGroup(inputs: InputBase<any>[] ) {
    const group: any = {};

    inputs.forEach(input => {
      switch(input.type){
      case 'checkbox'://[false, Validators.requiredTrue]
        group[input.key] = input.required ? new FormControl(false, Validators.requiredTrue)
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
  /*
  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};
    const sections: {} = {};
    Object.keys(questions).forEach((eachgroup: string) => {
      group = {};
      questions[eachgroup].forEach(question => {
        const validators = [];
        if (question.validators) {
          question.validators.forEach(element => {
            switch (element) {
              case 'required': validators.push(Validators.required); break;
              case 'email': validators.push(Validators.email); break;
            }
          });
          group[question.key] = new FormControl(question.value || '', validators);
        } else {
          group[question.key] = new FormControl(question.value || '');
        }
      });
      sections[eachgroup] = new FormGroup(group);
    });

    return new FormGroup(sections);
  }*/
}
//https://stackoverflow.com/questions/57328081/creating-checkbox-with-dynamic-forms-in-angular-8