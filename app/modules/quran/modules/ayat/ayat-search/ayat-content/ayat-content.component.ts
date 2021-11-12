import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ayat-content',
  templateUrl: './ayat-content.component.html',
  styleUrls: ['./ayat-content.component.css']
})
export class AyatContentComponent implements OnInit {
  
  @Input() data:any = {};
  @Input() config:any = {};
  @Input() refMore: TemplateRef<any>;
  @Output() leftClick = new EventEmitter<any>();
  @Output() rightClick = new EventEmitter<any>();
  @Output() starClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  _leftClick(ev:any){
    ev.preventDefault();
    this.leftClick.emit(ev);
  }
  _rightClick(ev:any){
    ev.preventDefault();
    this.rightClick.emit(ev);
  }
  _starClickClick(data:any, switch_on:string){
    //console.log(data,switch_on);
    data.$event.preventDefault();
    this.starClick.emit({data,switch_on});
  }
  /*
  @Input('data')
  set in(val:any) {
    this.data = val;
  }
  
  _isWithSuraView:boolean = false;
  get isWithSuraView() { return this.config.isSuraSearch && this._isWithSuraView }
  @Input('isWithSuraView')
  set in(val:boolean) {
    this._isWithSuraView = val;
  }*/
}