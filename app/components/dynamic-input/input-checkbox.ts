import { InputBase } from './input-base';

export class CheckBoxInput extends InputBase<string> {
  controlType = 'checkbox';
  type: 'checkbox';
  //checked: boolean;
  /*
  constructor(options) {
    super(options);
    this.type = options.type || '';
    this.checked = options.checked || false;
  }
  */
}