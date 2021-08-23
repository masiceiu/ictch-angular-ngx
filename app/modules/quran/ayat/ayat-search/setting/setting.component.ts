import { Component, OnInit } from '@angular/core';
import { InputBase } from 'app/components/dynamic-input/input-base';
import { TextboxInput } from 'app/components/dynamic-input/input-textbox';
import { CheckBoxInput } from 'app/components/dynamic-input/input-checkbox';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  inputs$: Observable<InputBase<any>[]>;
  constructor() { }

  ngOnInit() {
    this.inputs$ = this.getInputs();
  }
  private getInputs() {

    const inputs: InputBase<string>[] = [
/*
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
*/
      new TextboxInput({
        key: 'atext',
        label: 'A-Text',
        value: '',
        required: true,
        order: 1
      }),
/*
      new CheckBoxInput({
        key: 'satext',
        label: 'S-A-Text',
        type: 'checkbox',
        order: 2
      })*/
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}