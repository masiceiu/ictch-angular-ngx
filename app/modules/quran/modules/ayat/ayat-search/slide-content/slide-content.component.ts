import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ScrollableItemDirective } from './../../../../shared/directives/scrollable-item.directive';

@Component({
	selector: 'sub-slide-content',
	template: ``
	//template: `AllowDays = {{_allowDays}}`
})
export class SubSlideContentComponent {

  @Input('index')
  set in(val) {
    console.log('index:', val);
  }
  @Input() data!: number | string;
  @Output() dataChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    //this.data = Math.min(40, Math.max(8, +this.size + delta));
    //this.dataChange.emit(this.data);
  }
  /*
  _allowDays:boolean = true;
  @Input('allowDays')
  set in(val) {
    console.log('allowDays = '+val);
    this._allowDays = val;
  }*/
  //ref: https://angular.io/guide/two-way-binding
}

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.css'],
})
export class SlideContentComponent implements OnInit {
  
  @Input() maxHeight = 300
  @Input() positionTop = 35;
  @Output() onItemClick = new EventEmitter<any>();

  list:any[] = [];
  toggler:boolean = true;
  constructor() { }
  
  searchIndex:any = {};
  ngOnInit() {
  }
  @Input('data')
  set in(list:any[]) {
    this.list = list;
    if(list.length>0){
      this.list.forEach((it:any) => {
        let char = it.name.charAt(0);
        this.searchIndex[char] = '';
      });
    }
  }
  toggle(){
    this.toggler = !this.toggler;
  }
  _onItemClick(data:any, switch_on:string){
    //console.log(data,switch_on);
    this.toggle();
    data.$event.preventDefault();
    this.onItemClick.emit({data,switch_on});
    //this.onItemClick.emit(data,switch_on);
  }
  map(it:any): any[]{
    return Object.keys(it).map(key => {
      return key;
    });
  }
  @ViewChildren(ScrollableItemDirective) scrollableItems: QueryList<ScrollableItemDirective>
  public handleScrollClick($event:any, key: string) {
    $event.preventDefault();
    //console.log($event, key);
    const item = this.scrollableItems.find(x => x.key.startsWith(key))
    item.scrollIntoView();
  }
}