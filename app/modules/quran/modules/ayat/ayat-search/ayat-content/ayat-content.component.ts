import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ayat-content',
  templateUrl: './ayat-content.component.html',
  styleUrls: ['./ayat-content.component.css']
})
export class AyatContentComponent implements OnInit {
  
  //@Input() it:any = {};
  @Input() data:any = {};
  @Input() config:any = {};
  //@Input() isSuraAllow = false;
  //@Input() suraIndex:any = {1:{name:"aa"}};
  //@Input() star_ayats:any[] = [];
  @Input() refMore: TemplateRef<any>;
  @Output() onItemClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    
  }
  _onItemClick(data:any, switch_on:string){
    //console.log(data,switch_on);
    data.$event.preventDefault();
    this.onItemClick.emit({data,switch_on});
  }
  _isSuraAllow:boolean = true;
  get isSuraAllow() { return this.config.isSuraSearch && this._isSuraAllow }
  @Input('isSuraAllow')
  set in(val:boolean) {
    this._isSuraAllow = val;
  }
}