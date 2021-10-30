import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'sub-slide-content',
	template: `
	  AllowDays = {{_allowDays}}
 `
})
export class SubSlideContentComponent {
  _allowDays:boolean;
  
  @Input('allowDays')
  set in(val) {
    console.log('allowDays = '+val);
    this._allowDays = val;
  }
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

  ngOnInit() {
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