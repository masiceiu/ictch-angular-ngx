
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from './../question-base';
import { InputControlService } from './../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ InputControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: InputBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: InputControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as InputBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}