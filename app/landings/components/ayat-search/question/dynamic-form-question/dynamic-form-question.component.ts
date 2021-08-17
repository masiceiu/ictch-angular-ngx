import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from './../question-base';


@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormInputComponent {
  @Input() question!: InputBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}