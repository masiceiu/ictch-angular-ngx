
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from './../input-base';
import { InputControlService } from './../input-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ InputControlService ]
})
export class DynamicFormComponent implements OnInit {
  
  @Input() submitTitle = "Submit";
  @Input() inputs: InputBase<string>[] | null = [];
  @Output() output = new EventEmitter<any>();
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: InputControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.inputs as InputBase<string>[]);
  }
  onSubmit() {
    let res = this.form.getRawValue();
    this.output.emit(res);
    //this.payLoad = JSON.stringify(res);
  }
}