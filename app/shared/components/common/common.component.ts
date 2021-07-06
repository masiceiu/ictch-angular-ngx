import { Component, OnInit, ViewChild, TemplateRef, Input  } from '@angular/core';

@Component({
  selector: 'common',
  templateUrl: './common.component.html'
})
export class CommonComponent implements OnInit {

  @Input()
  data: any;

  @ViewChild('template')
  templateRef: TemplateRef<any>;

  getTemplateByName(name: string){
    return this[name] as TemplateRef<any>;
  }

  constructor() { }

  ngOnInit() {
  }

}