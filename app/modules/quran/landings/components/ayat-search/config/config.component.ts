import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  config = {
    aFontSize:30,//
    mFontSize:16,//
    eFontSize:17,//
  };
  frm = this.fb.group({
    aDisplay: [true],
    aFontSize: [30],
    logs: this.fb.group({
      note: ['']
    }),
  });
  ngOnInit() {
  }

}