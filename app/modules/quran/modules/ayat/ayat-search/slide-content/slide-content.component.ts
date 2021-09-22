import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.css']
})
export class SlideContentComponent implements OnInit {
  
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
    console.log(data,switch_on);
    this.toggle();
    data.$event.preventDefault();
    //this.onItemClick.emit({a:data,b:switch_on});
    this.onItemClick.emit("{a:data,b:switch_on}");
  }

}
/*
this.addModel.emit({make: make, name: name});
//shorthand is below
this.addModel.emit({make, name});
*/