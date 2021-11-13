, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


export type ModelValidatorFn = (value: 'string' | 'boolean' | 'number') => object;

export interface ModelField {
  name: string;
  type: 'string' | 'boolean' | 'number';
  validators?: ModelValidatorFn[];
  excludeFromDb?: boolean;
}


interface JsonField{
  name: string;
  inputType: 'input' | 'checkbox'
  placeholder: string;
  control: FormControl;
  initalValue?: string;
  validators?: Function[];
}



const formDef: JsonField[] = [
  {
    name: 'Age',
    inputType: 'input',
    placeholder: 'Enter your age',
    control: new FormControl('some inital value'),
    validators: [],
  },
  {
    name: 'Name',
    inputType: 'input',
    placeholder: 'Enter your age',
    control: new FormControl(),
    validators: [],
  },
  {
    name: 'IsTall',
    inputType: 'checkbox',
    placeholder: 'Are you tall?',
    control: new FormControl(false),
    validators: [],
  }
]

function makeGroup(fields: JsonField[]) {
  const group = new FormGroup({});
  fields.forEach(f => group.setControl(f.name, f.control));
  return group;
}
/*
 <mat-form-field *ngIf="field.inputType === 'textarea' || field.inputType === 'input' ">
      <textarea
       *ngIf="field.inputType === 'textarea'" matInput [placeholder]="field.placeholder"
        [formControlName]="field.name" ></textarea>

      <input *ngIf="field.inputType === 'input'"
        matInput [placeholder]="field.placeholder" [formControlName]="field.name" />
    </mat-form-field>

    <mat-checkbox *ngIf="field.inputType === 'checkbox'" [formControlName]="field.name">{{field.placeholder}}</mat-checkbox>
*/
@Component({
  selector: 'json-form',
  template: `
  <form (ngSubmit)="onSubmit()" [formGroup]="form">
    <ng-container *ngFor="let field of def">

       

    </ng-container>    
    <pre>{{form.value  | json}}</pre>
    <button *ngIf="" mat-raised-button>submit</button>
  </form>  
  `
})
export class JsonFormComponent<T>{
  public readonly form: FormGroup;
  public readonly def: JsonField[];

  @Input() set formDef(def: JsonField[]){
    // should be readonly so that no one tries reassigning it outside of here
    // use this case so that we are able to reassign it
    (this as {form: FormGroup}).form = makeGroup(def);
    (this as {def: JsonField[]}).def = def;
  }

  onSubmit(){
   // debugger
    this.formSubmit.emit(this.form.value);
  }

  @Output() formSubmit = new EventEmitter<T>()
}

@Component({
  selector: 'app-json-forms-test',
  templateUrl: './json-forms.component.html',
  styleUrls: ['./json-forms.component.css']
})
export class JsonFormsComponentTest implements OnInit {

  formDef = formDef;
  constructor() { }

  ngOnInit() {
  }

}