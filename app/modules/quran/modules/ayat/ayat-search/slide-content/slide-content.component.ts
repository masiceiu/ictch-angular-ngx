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
  @Input() list:any[] = [];
  @Output() onItemClick = new EventEmitter<any>();
  //@Output addEvent = new EventEmitter<{make: string, name: string}>();
  toggler:boolean = true;
  constructor() { }
  
  searchIndex:any = {};
  ngOnInit() {
    /*this.list.forEach((it:any) => {
      let char = it.name.charAt(0);
      this.searchIndex[char] = '';
    });
    console.log('this.searchIndex:',this.searchIndex);*/
  }
  @Input('data')
  set in(list:any[]) {
    this.list = list;
    if(list.length>0){
      this.list.forEach((it:any) => {
        let char = it.name.charAt(0);
        this.searchIndex[char] = '';
      });
      //console.log('this.searchIndex:',this.searchIndex);
    }
    //console.log('data:', list.length);
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
  public items = [
    { key: '2019-03-02', value: 'A' },
    { key: '2019-03-02', value: 'B' },
    { key: '2019-03-02', value: 'C' },
    { key: '2019-03-03', value: 'D' },
    { key: '2019-03-03', value: 'E' },
    { key: '2019-03-04', value: 'F' },
    { key: '2019-03-05', value: 'G' },
  ]
  @ViewChildren(ScrollableItemDirective) scrollableItems: QueryList<ScrollableItemDirective>
  public handleScrollClick($event:any, key: string) {
    $event.preventDefault();
    console.log($event, key);
    const item = this.scrollableItems.find(x => x.key === key)
    item.scrollIntoView();
  }
  /*
  _allowDay: boolean;
  get allowDay(): boolean {
      return this._allowDay;
  }
  @Input() set allowDay(value: boolean) {
      this._allowDay = value;
      //this.updatePeriodTypes();
  }
  @Input() set id(value: string) {
    console.log(value);
  }
  
  _allowDays:boolean:
  @Input('allowDays')
  set in(val) {
    console.log('allowDays = '+val);
    this._allowDays = val;
  }
  <sub [allowDays]="val"></sub>*/
}
/*
this.addModel.emit({make: make, name: name});
//shorthand is below
this.addModel.emit({make, name});
*/