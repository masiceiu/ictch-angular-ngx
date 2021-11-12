import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css']
})
export class SearchContentComponent implements OnInit {

  @Input() data:any = {};
  @Input() config:any = {};
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
  _isWithSuraView:boolean = false;
  get isWithSuraView() { return this.config.isSuraSearch && this._isWithSuraView }
  @Input('isWithSuraView')
  set in(val:boolean) {
    this._isWithSuraView = val;
  }
}