import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from './../input-base';


@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent {
  @Input() input!: InputBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.input.key].valid; }
  /*onChange(key) {
    let f = this.form.controls[this.input.key];
    console.log(key,f);
  }
  //const rememberLoginControl = new FormControl();
  get rememberLoginControl() {return new FormControl();}*/
}