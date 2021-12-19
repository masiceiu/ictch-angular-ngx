import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

//import { inputData } from './person';
@Component({
  selector: 'app-json-dyn-form',
  templateUrl: './json-dyn-form.component.html',
  styleUrls: ['./json-dyn-form.component.css']
})
export class JsonDynFormComponent implements OnInit {

  @Input() dataObject;
  form: FormGroup;
  objectProps;

  //person;
  constructor() {
    //this.person = inputData;
    this.dataObject = inputData;
  }

 ngOnInit() {
    // remap the API to be suitable for iterating over it
    this.objectProps =
      Object.keys(this.dataObject)
        .map(prop => {
          return Object.assign({}, { key: prop }, this.dataObject[prop]);
        });

    // setup the form
    const formGroup = {};
    for (let prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
    }
    this.form = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        } else if (validation === 'minLength') {
          formValidators.push(Validators.minLength(validators[validation]));
        }
        else if (validation === 'maxLength') {
          formValidators.push(Validators.maxLength(validators[validation]));
        }
        else if (validation === 'pattern') {
          formValidators.push(Validators.pattern(validators[validation]));
        }
      }
    }

    return formValidators;
  }
  validationCheck(event, type) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    if (key == 37 || key == 38 || key == 39 || key == 40 || key == 8 || key == 46 || key >= 96 && key <= 105) {
      return;
    }
    if ("number" == type) {
      key = String.fromCharCode(key);
      var regex = /^[0-9]*$/;

      if (!regex.test(key)) {
        theEvent.returnValue = false;

        if (theEvent.preventDefault)
          theEvent.preventDefault();
      }
    }
  }
  formatPhoneNumber(number) {
    var numbers = number.value.replace(/\D/g, ''),
      char = { 0: '+ ', 2: ' (', 5: ') ', 8: ' - ' };
    number.value = '';
    for (var i = 0; i < numbers.length; i++) {
      number.value += (char[i] || '') + numbers[i];
    }
  }

  onSubmit(form) {
    console.log(form);
  }

}
export const inputData = {
  "name": {
  "id": "userName",
  "name": "Name",
  "type": "text",
  "value": "Hello",
  "label": "Name",
  "labelClass": "labelLeft",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "Please Enter Name",
  "pattern": "",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control inputLeft",
  "style": "",
  "parentClass": "form-group",
  "minLengthMsg": "Minimum 5 Chartacters are required",
      "maxLengthMsg": "Maximum 10 Chartacters are required",
      "patternMsg":"Please Enter Numbers and Alphabets",
  "minValue": 5,
  "maxValue": 10,
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "minLength":5,
          "maxLength":10, 
          "pattern":/^[a-zA-Z0-9]+$/
       }
  },
  "hidden" : {
  "id": "",
  "name": "",
  "type": "hidden",
  "value": "",
  "label": "",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "",
  "pattern": "",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {

       }
  },
  "password" : {
  "id": "password",
  "name": "password",
  "type": "password",
  "value": "password",
  "label": "Password",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "",
  "pattern": /^[a-zA-Z0-9]+$/,
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
      "parentClass": "form-group",
      "minLengthMsg": "Minimum 5 Chartacters are required",
      "maxLengthMsg": "Maximum 10 Chartacters are required",
      "patternMsg":"Please Enter Numbers and Alphabets",
      "minValue": 5,
  "maxValue": 10,
  "limit": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "minLength":5,
          "maxLength":10, 
          "pattern":/^[a-zA-Z0-9]+$/
       }
},
"email" : {
  "id": "email",
  "name": "email",
  "type": "email",
  "value": "abc@xyz.com",
  "label": "Email",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "",
  "pattern": /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "limit": "10/20/30 etc.",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
       }
},
"numeric:number" : {
  "id": "number",
  "name": "integer",
  "type": "number",
  "value": "integer",
  "label": "Number",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "",
  "pattern": "",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":""
       }
},
"numeric:integer" : {
  "id": "integer",
  "name": "integer",
  "type": "number",
  "value": "",
  "label": "Integer",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "",
  "pattern": "",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":""
       }
},
"numeric:decimal" : {
  "id": "decimal",
  "name": "decimal",
  "type": "number",
  "value": "",
  "label": "Decimal",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "",
  "pattern": "",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":""
       }
},
"alpha" : {
  "id": "alpha",
  "name": "alpha",
  "type": "alpha",
  "value": "a to z",
  "label": "Alpha",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "Enter Alphabets Only",
  "pattern": "",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":""
       }
},
"alphaNumeric" : {
  "id": "alphaNumeric",
  "name": "alphaNumeric",
  "type": "alphaNumeric",
  "value": "a to z 0-9",
  "label": "AlphaNumeric",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "Enter Alphabets and Numbers only",
  "pattern": "/[a-z0-9]/",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":"/[a-z0-9]/"
       }
},
"phone" : {
  "id": "phone",
  "name": "phone",
  "type": "tel",
  "value": "",
  "label": "Phone",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "",
  "pattern": "/[0-9]/",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":"/[0-9]/"
       }
},
"date" : {
  "id": "date",
  "name": "date",
  "type": "date",
  "value": "12/22/2019",
  "label": "Date",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "Enter Date Only",
  "pattern": "",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "parentClass": "form-group",
  "style": "",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":""
       }
},
"time": {
  "id": "time",
  "name": "time",
  "type": "time",
  "value": "08:10 AM",
  "label": "Time",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "Enter Time only",
  "pattern": "",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":""
       }
},
"datetime" : {
  "id": "datetime",
  "name": "datetime",
  "type": "datetime-local",
  "value": "",
  "label": "Date Time",
  "labelClass": "",
  "labelOrientation": "left/right/top/bottom",
  "placeholder": "Enter Date and Time only",
  "pattern": "",
  "tooltip": true,
  "tooltipId": "",
  "tooltipMessage": "",
  "class": "form-control",
  "style": "",
  "parentClass": "form-group",
  "minLength": "",
  "maxLength": "",
  "minValue": "",
  "maxValue": "",
  "event": "onBlur/onChange etc.",
  "method": "",
      "parameters": [],
      "validation": {
          "required": true,
          "pattern":""
       }
}
}
