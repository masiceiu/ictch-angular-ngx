import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

import { 
  InputBase,
  CheckBoxInput,
  TextboxInput,
  DropdownInput
} from './../../../../../../components/dynamic-input';
//import { CheckBoxInput } from './../../../../../components/dynamic-input/input-checkbox';
//import { TextboxInput } from './../../../../../components/dynamic-input/input-textbox';
//import { DropdownInput } from './../../../../../components/dynamic-input/input-dropdown';
//import { DynamicInputModule } from components/dynamic-input/dynamic-input.module';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  inputs$: Observable<InputBase<any>[]>;
  @Output() onSubmit = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    //this.inputs$ = this.getInputs();
    this.inputs$ = this.getGroupInputs();
  }
  _onSubmit(res:any) {
    this.onSubmit.emit(res);
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
      }),*/
      
      new TextboxInput({
        key: 'atext',
        label: 'A-Text',
        type: 'text',
        value: '',
        required: true,
        order: 1
      }),
      new CheckBoxInput({
        key: 'satext',
        label: 'S-A-Text',
        type: 'checkbox',
        order: 2
      })
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
  private getGroupInputs() {

    const inputs: InputBase<string>[] = [
      new TextboxInput({
        key: 'a_group',
        label: 'Group Name',
        type: 'text',
        value: '',
        required: true,
        order: 1
      })
      /*
      ,
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
      new CheckBoxInput({
        key: 'satext',
        label: 'S-A-Text',
        type: 'checkbox',
        order: 2
      })
      */
      
      
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}